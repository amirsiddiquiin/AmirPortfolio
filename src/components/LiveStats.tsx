import { useEffect, useState } from 'react';
import { Github, Code2, Users, Zap, TrendingUp, Calendar } from 'lucide-react';

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

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/amirsiddiquiin');
        const userData = await userResponse.json();

        // Fetch repos data
        const reposResponse = await fetch('https://api.github.com/users/amirsiddiquiin/repos?per_page=100&sort=updated');
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

        // Fetch real commit data
        const contributionMap = new Map<string, number>();
        const today = new Date();
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        
        // Initialize all days
        for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
          const dateStr = d.toISOString().split('T')[0];
          contributionMap.set(dateStr, 0);
        }

        // Fetch commits from repos
        if (Array.isArray(reposData)) {
          for (const repo of reposData.slice(0, 15)) {
            try {
              const commitsResponse = await fetch(
                `https://api.github.com/repos/amirsiddiquiin/${repo.name}/commits?per_page=100&since=${oneYearAgo.toISOString()}`
              );
              const commitsData = await commitsResponse.json();
              
              if (Array.isArray(commitsData)) {
                commitsData.forEach((commit: any) => {
                  if (commit.commit?.author?.date) {
                    const date = commit.commit.author.date.split('T')[0];
                    const current = contributionMap.get(date) || 0;
                    contributionMap.set(date, current + 1);
                  }
                });
              }
            } catch (err) {
              console.error(`Error fetching commits for ${repo.name}:`, err);
            }
          }
        }

        // Convert to array and sort
        const contributionData: ContributionDay[] = Array.from(contributionMap.entries())
          .map(([date, count]) => ({ date, count }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        const maxCount = Math.max(...contributionData.map(d => d.count), 1);
        setMaxContributions(maxCount);
        setContributions(contributionData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-slate-800/40';
    const percentage = count / maxContributions;
    if (percentage < 0.25) return 'bg-emerald-900/50';
    if (percentage < 0.5) return 'bg-emerald-800/60';
    if (percentage < 0.75) return 'bg-emerald-700/75';
    return 'bg-emerald-500/90';
  };

  // Group contributions by weeks
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Calculate stats
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  const daysActive = contributions.filter(day => day.count > 0).length;
  const longestStreak = calculateLongestStreak(contributions);
  const avgDaily = daysActive > 0 ? (totalContributions / daysActive).toFixed(1) : 0;

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
      label: 'Contributions',
      value: totalContributions,
      color: 'bg-emerald-500/20',
      textColor: 'text-emerald-400',
    },
  ];

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
              Real-time GitHub metrics and contribution history over the last year
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

          {/* Contribution Graph */}
          <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-8 fade-in delay-400 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-semibold">Contribution Activity</h3>
              <span className="text-xs text-muted-foreground ml-auto">Last 52 weeks</span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="animate-spin mb-4">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Fetching your contributions...</p>
                </div>
              </div>
            ) : weeks.length > 0 ? (
              <div className="space-y-6">
                {/* Main Grid */}
                <div className="overflow-x-auto">
                  <div className="grid gap-2 p-2" style={{ 
                    gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                    minWidth: 'fit-content'
                  }}>
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {week.map((day, dayIndex) => {
                          const date = new Date(day.date);
                          const isToday = new Date().toDateString() === date.toDateString();
                          
                          return (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`group relative w-4 h-4 rounded cursor-pointer transition-all duration-200 ${getContributionColor(day.count)} ${isToday ? 'ring-2 ring-primary' : 'hover:scale-125 hover:shadow-lg'}`}
                            >
                              {/* Tooltip */}
                              <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                {day.count} contribution{day.count !== 1 ? 's' : ''} on {date.toLocaleDateString('en-US', { 
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric'
                                })}
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
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-medium">Less</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded bg-slate-800/40" />
                      <div className="w-3 h-3 rounded bg-emerald-900/50" />
                      <div className="w-3 h-3 rounded bg-emerald-800/60" />
                      <div className="w-3 h-3 rounded bg-emerald-700/75" />
                      <div className="w-3 h-3 rounded bg-emerald-500/90" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">More</span>
                  </div>
                  <a
                    href="https://github.com/amirsiddiquiin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                  >
                    View full profile
                    <span>→</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No contribution data available</p>
              </div>
            )}
          </div>

          {/* Stats Cards */}
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
              <p className="text-xs text-muted-foreground">{Math.round((daysActive / 365) * 100)}% of the year</p>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-yellow-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <h4 className="font-semibold">Longest Streak</h4>
              </div>
              <p className="text-4xl font-bold text-yellow-400 mb-2">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">consecutive days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
