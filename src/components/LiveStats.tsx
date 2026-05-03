import { useEffect, useMemo, useState } from 'react';
import {
  Github,
  Code2,
  Users,
  Zap,
  TrendingUp,
  Calendar,
  AlertCircle,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

interface GitHubStats {
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
}

interface GitHubContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

const USERNAME = 'amirsiddiquiin';
const CURRENT_YEAR = new Date().getFullYear();
const AVAILABLE_YEARS = Array.from({ length: 6 }, (_, i) => CURRENT_YEAR - i);

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const normalizeGitHubColor = (color?: string) => {
  if (!color) return '#161b22';
  return color.toLowerCase();
};

const calculateLongestStreak = (days: GitHubContributionDay[]) => {
  let max = 0;
  let current = 0;

  for (const day of days) {
    if ((day?.contributionCount || 0) > 0) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }

  return max;
};

const chunkWeeks = (days: GitHubContributionDay[]) => {
  const weeks: GitHubContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
};

const LiveStats = () => {
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [contributions, setContributions] = useState<GitHubContributionDay[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingHeatmap, setLoadingHeatmap] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch GitHub profile stats (free)
   */
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoadingStats(true);

        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok) throw new Error('Failed to fetch GitHub profile');

        const user = await userRes.json();
        const repos = repoRes.ok ? await repoRes.json() : [];

        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum: number, repo: any) => sum + (repo?.stargazers_count || 0), 0)
          : 0;

        setStats({
          followers: user?.followers || 0,
          following: user?.following || 0,
          publicRepos: user?.public_repos || 0,
          totalStars,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub stats');
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, []);

  /**
   * Fetch contributions by year (free, no token)
   */
useEffect(() => {
  const fetchContributionYear = async () => {
    try {
      setLoadingHeatmap(true);
      setError(null);

      const response = await fetch(
        `https://github.com/users/${USERNAME}/contributions?from=${selectedYear}-01-01&to=${selectedYear}-12-31`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch contribution data');
      }

      const svgText = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, 'image/svg+xml');

      const rects = Array.from(doc.querySelectorAll('rect[data-date]'));

      const flatDays: GitHubContributionDay[] = rects
        .map((rect) => {
          const date = rect.getAttribute('data-date') || '';
          const contributionCount = Number(rect.getAttribute('data-count') || 0);
          const color = normalizeGitHubColor(rect.getAttribute('fill') || '#161b22');

          return {
            date,
            contributionCount,
            color,
          };
        })
        .filter((day) => day.date);

      setContributions(flatDays);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to fetch contributions');
      setContributions([]);
    } finally {
      setLoadingHeatmap(false);
    }
  };

  fetchContributionYear();
}, [selectedYear]);

  const weeks = useMemo(() => chunkWeeks(contributions), [contributions]);

  const totalContributions = useMemo(
    () => contributions.reduce((sum, day) => sum + (day?.contributionCount || 0), 0),
    [contributions]
  );

  const daysActive = useMemo(
    () => contributions.filter((day) => (day?.contributionCount || 0) > 0).length,
    [contributions]
  );

  const longestStreak = useMemo(() => calculateLongestStreak(contributions), [contributions]);

  const monthPositions = useMemo(() => {
    const positions: { label: string; index: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = week?.[0];
      if (!firstDay?.date) return;

      const month = new Date(firstDay.date).getMonth();

      if (month !== lastMonth) {
        positions.push({ label: MONTH_LABELS[month], index: weekIndex });
        lastMonth = month;
      }
    });

    return positions;
  }, [weeks]);

  const statCards = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'Public Repos',
      value: stats?.publicRepos || 0,
      color: 'bg-blue-500/10 border-blue-500/20',
      textColor: 'text-blue-400',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      label: 'Total Stars',
      value: stats?.totalStars || 0,
      color: 'bg-yellow-500/10 border-yellow-500/20',
      textColor: 'text-yellow-400',
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: 'Followers',
      value: stats?.followers || 0,
      color: 'bg-purple-500/10 border-purple-500/20',
      textColor: 'text-purple-400',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: 'Activity Score',
      value: totalContributions,
      color: 'bg-emerald-500/10 border-emerald-500/20',
      textColor: 'text-emerald-400',
    },
  ];

  if (error && !stats && contributions.length === 0) {
    return (
      <section id="stats" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stats" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm font-mono text-primary mb-3">// LIVE STATS</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Activity & Contributions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GitHub insights, yearly activity, and contribution history.
            </p>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {statCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-2xl border ${card.color} bg-card/40 backdrop-blur-sm p-6`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                      {card.label}
                    </p>
                    <p className={`text-3xl font-bold ${card.textColor}`}>
                      {loadingStats ? '—' : Number(card.value).toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-xl bg-background/60 p-3">{card.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Heatmap */}
<div className="rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 md:p-8 mb-8">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
    <div className="flex items-center gap-3">
      <Calendar className="h-5 w-5 text-emerald-400" />
      <div>
        <h3 className="text-xl font-semibold">Contribution Heatmap</h3>
        <p className="text-xs text-muted-foreground">
          GitHub activity for {selectedYear}
        </p>
      </div>
    </div>

    <div className="relative">
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        className="appearance-none rounded-xl border border-border bg-background/80 px-4 py-2.5 pr-10 text-sm font-medium outline-none transition focus:border-primary"
      >
        {AVAILABLE_YEARS.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  </div>

  <div className="rounded-2xl border border-white/5 bg-[#0d1117] p-4 overflow-x-auto">
    <img
      src={`https://ghchart.rshah.org/${USERNAME}?year=${selectedYear}`}
      alt={`${USERNAME} GitHub contribution graph`}
      className="w-full min-w-[900px] rounded-lg"
      loading="lazy"
    />
  </div>
</div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <h4 className="font-semibold">Activity Score</h4>
              </div>
              <p className="text-4xl font-bold text-emerald-400 mb-2">
                {totalContributions.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">
                total contributions in {selectedYear}
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold">Days Active</h4>
              </div>
              <p className="text-4xl font-bold text-blue-400 mb-2">{daysActive}</p>
              <p className="text-xs text-muted-foreground">
                {Math.round((daysActive / 365) * 100)}% consistency
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <h4 className="font-semibold">Longest Streak</h4>
              </div>
              <p className="text-4xl font-bold text-yellow-400 mb-2">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">
                consecutive active days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;