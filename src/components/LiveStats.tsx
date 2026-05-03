import { useEffect, useState } from 'react';
import { Github, Code2, Users, Zap, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

interface GitHubStats {
  repositories: number;
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
}

interface ContributionDay {
  date: string;
  count: number;
}

const calculateLongestStreak = (contributions: ContributionDay[]): number => {
  let maxStreak = 0;
  let currentStreak = 0;
  
  contributions.forEach(day => {
    if (day.count > 0) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });
  
  return maxStreak;
};

const LiveStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [maxContributions, setMaxContributions] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/amirsiddiquiin');
        const userData = await userResponse.json();

        if (!userData.public_repos) {
          throw new Error('Failed to fetch user data');
        }

        // Fetch repos data
        const reposResponse = await fetch(
          'https://api.github.com/users/amirsiddiquiin/repos?per_page=100&sort=updated'
        );
        const reposData = await reposResponse.json();
        
        const totalStars = Array.isArray(reposData) 
          ? reposData.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0)
          : 0;

        setStats({
          repositories: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          publicRepos: userData.public_repos || 0,
          totalStars: totalStars,
        });

        // Initialize contributions map for last 365 days
        const contributionMap = new Map<string, number>();
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        // Initialize all days with 0
        for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
          const dateStr = d.toISOString().split('T')[0];
          contributionMap.set(dateStr, 0);
        }

        // Fetch commits from each repository
        if (Array.isArray(reposData)) {
          for (const repo of reposData.slice(0, 30)) {
            try {
              const commitsUrl = `https://api.github.com/repos/amirsiddiquiin/${repo.name}/commits?per_page=100&since=${oneYearAgo.toISOString()}`;
              const commitsResponse = await fetch(commitsUrl);
              
              if (!commitsResponse.ok) continue;
              
              const commitsData = await commitsResponse.json();

              if (Array.isArray(commitsData)) {
                commitsData.forEach((commit: any) => {
                  try {
                    if (commit.commit?.author?.date) {
                      const date = commit.commit.author.date.split('T')[0];
                      if (contributionMap.has(date)) {
                        contributionMap.set(date, (contributionMap.get(date) || 0) + 1);
                      }
                    }
                  } catch (e) {
                    // Skip problematic commits
                  }
                });
              }
            } catch (err) {
              // Continue with next repo
              continue;
            }
          }
        }

        // Convert to sorted array
        const contributionData: ContributionDay[] = Array.from(contributionMap.entries())
          .map(([date, count]) => ({ date, count }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        if (contributionData.length === 0) {
          setError('No contribution data found');
          setLoading(false);
          return;
        }

        const maxCount = Math.max(...contributionData.map(d => d.count), 1);
        setMaxContributions(maxCount);
        setContributions(contributionData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch GitHub data');
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getContributionColor = (count: number): string => {
    if (count === 0) return 'bg-slate-700/40';
    const percentage = count / Math.max(maxContributions, 1);
    if (percentage < 0.2) return 'bg-emerald-900/60';
    if (percentage < 0.4) return 'bg-emerald-800/70';
    if (percentage < 0.6) return 'bg-emerald-700/80';
    if (percentage < 0.8) return 'bg-emerald-600/90';
    return 'bg-emerald-500';
  };

  // Group contributions by weeks (52 weeks)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Calculate stats
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  const daysActive = contributions.filter(day => day.count > 0).length;
  const longestStreak = calculateLongestStreak(contributions);

  // Get year range
  const yearStart = contributions.length > 0 ? new Date(contributions[0].date).getFullYear() : new Date().getFullYear();
  const yearEnd = contributions.length > 0 ? new Date(contributions[contributions.length - 1].date).getFullYear() : new Date().getFullYear();

  const statCards = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'Public Repos',
      value: stats?.publicRepos || 0,
      color: 'bg-blue-500/20',
      textColor: 'text-blue-400',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      label: 'Total Stars',
      value: stats?.totalStars || 0,
      color: 'bg-yellow-500/20',
      textColor: 'text-yellow-400',
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: 'Followers',
      value: stats?.followers || 0,
      color: 'bg-purple-500/20',
      textColor: 'text-purple-400',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: 'Total Contributions',
      value: totalContributions,
      color: 'bg-emerald-500/20',
      textColor: 'text-emerald-400',
    },
  ];

  if (error) {
    return (
      <section id="stats" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-mono text-primary mb-3 fade-in">// LIVE STATS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
                Activity & Contributions
              </h2>
            </div>
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-6 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
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
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// LIVE STATS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Activity & Contributions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              {yearStart === yearEnd 
                ? `Real-time GitHub metrics and contribution history for ${yearStart}`
                : `Real-time GitHub metrics and contribution history (${yearStart}-${yearEnd})`
              }
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 fade-in delay-300">
            {statCards.map((card, index) => (
              <div
                key={index}
                className={`relative rounded-lg border border-border/60 ${card.color} backdrop-blur-sm p-6 hover:border-border transition-all duration-300 group hover-lift`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">{card.label}</p>
                    <p className={`text-3xl font-bold ${card.textColor}`}>
                      {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
                    </p>
                  </div>
                  <div className={`${card.color} rounded-lg p-3 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contribution Heatmap */}
          <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-8 fade-in delay-400 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-semibold">Contribution Heatmap</h3>
              <span className="text-xs text-muted-foreground ml-auto">52 weeks of activity</span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin mb-4 flex justify-center">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Loading your contributions...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Heatmap Grid */}
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-1" style={{ minWidth: 'fit-content' }}>
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {week.map((day, dayIndex) => {
                          const date = new Date(day.date);
                          const isToday = new Date().toDateString() === date.toDateString();

                          return (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`
                                group relative w-3.5 h-3.5 rounded-sm transition-all duration-200 cursor-pointer
                                ${getContributionColor(day.count)}
                                ${isToday ? 'ring-2 ring-primary ring-offset-1 ring-offset-background' : 'hover:scale-125 hover:shadow-lg shadow-sm'}
                              `}
                            >
                              {/* Tooltip */}
                              <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2 rounded whitespace-nowrap z-50 font-medium">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${getContributionColor(day.count)}`} />
                                  {day.count} {day.count === 1 ? 'contribution' : 'contributions'}
                                </div>
                                <div className="text-xs text-slate-300 mt-1">
                                  {date.toLocaleDateString('en-US', { 
                                    weekday: 'long',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between pt-6 border-t border-border/40">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground font-medium">Less activity</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-sm bg-slate-700/40" title="0 contributions" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-900/60" title="Low" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-800/70" title="Medium-Low" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-700/80" title="Medium" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-600/90" title="Medium-High" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-500" title="High" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">More activity</span>
                  </div>
                  <a
                    href="https://github.com/amirsiddiquiin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                  >
                    View GitHub Profile →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in delay-500">
            <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <h4 className="font-semibold">Total Contributions</h4>
              </div>
              <p className="text-4xl font-bold text-emerald-400 mb-2">{totalContributions.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">in the last year</p>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold">Days Active</h4>
              </div>
              <p className="text-4xl font-bold text-blue-400 mb-2">{daysActive}</p>
              <p className="text-xs text-muted-foreground">{Math.round((daysActive / 365) * 100)}% consistency</p>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-yellow-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <h4 className="font-semibold">Longest Streak</h4>
              </div>
              <p className="text-4xl font-bold text-yellow-400 mb-2">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">consecutive days with commits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
