import { useEffect, useState } from 'react';
import { Github, Code2, Users, Zap, TrendingUp } from 'lucide-react';

interface GitHubStats {
  repositories: number;
  commits: number;
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
}

interface ContributionDay {
  date: string;
  count: number;
}

interface RepoCommit {
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
          commits: 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          publicRepos: userData.public_repos || 0,
          totalStars: totalStars,
        });

        // Fetch real commit data from repositories
        const contributionMap = new Map<string, number>();
        const today = new Date();
        
        // Initialize all days in the last year
        for (let i = 364; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          contributionMap.set(dateStr, 0);
        }

        // Fetch commits from each repository
        if (Array.isArray(reposData)) {
          for (const repo of reposData.slice(0, 10)) { // Check last 10 repos
            try {
              const commitsResponse = await fetch(
                `https://api.github.com/repos/amirsiddiquiin/${repo.name}/commits?per_page=100&since=${new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString()}`
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

        // Convert map to sorted array
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
    if (count === 0) return 'bg-slate-700/30 hover:bg-slate-600/40';
    if (count <= Math.max(1, maxContributions * 0.25)) return 'bg-emerald-900/50 hover:bg-emerald-800/60';
    if (count <= Math.max(1, maxContributions * 0.5)) return 'bg-emerald-700/70 hover:bg-emerald-600/80';
    if (count <= Math.max(1, maxContributions * 0.75)) return 'bg-emerald-600/90 hover:bg-emerald-500';
    return 'bg-emerald-500 hover:bg-emerald-400';
  };

  // Get months and weeks for full year visualization
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthStarts: { [key: string]: number } = {};
  
  // Calculate which week each month starts
  contributions.forEach((day, index) => {
    const date = new Date(day.date);
    const month = months[date.getMonth()];
    if (!monthStarts[month]) {
      monthStarts[month] = Math.floor(index / 7);
    }
  });

  // Organize data into weeks (columns) and days (rows)
  const weeks = [];
  for (let i = 0; i < Math.ceil(contributions.length / 7); i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      const index = i * 7 + j;
      week.push(contributions[index]);
    }
    weeks.push(week);
  }

  // Get total contributions
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  const daysActive = contributions.filter(day => day.count > 0).length;
  const longestStreak = calculateLongestStreak(contributions);

  const statCards = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'Public Repos',
      value: stats?.publicRepos || 0,
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      label: 'Total Stars',
      value: stats?.totalStars || 0,
      color: 'from-yellow-500/20 to-yellow-600/20',
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: 'Followers',
      value: stats?.followers || 0,
      color: 'from-purple-500/20 to-purple-600/20',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      label: 'Active',
      value: 'Yes',
      color: 'from-green-500/20 to-green-600/20',
    },
  ];

  return (
    <section id="stats" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// LIVE STATS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Activity & Reach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              Real-time GitHub activity and contribution metrics from the last year
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 fade-in delay-300">
            {statCards.map((card, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border border-border/60 p-6 hover-lift group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {card.icon}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
                  <p className="text-2xl font-bold">
                    {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contribution Graph */}
          <div className="rounded-xl border border-border/60 bg-card p-8 fade-in delay-400">
            <h3 className="font-semibold text-lg mb-8">GitHub Contributions - Last Year</h3>
            
            {loading ? (
              <div className="flex items-center justify-center h-48">
                <p className="text-muted-foreground">Loading contribution data...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Month Labels */}
                <div className="flex gap-1 ml-12">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, idx) => (
                    <div key={month} className="text-xs text-muted-foreground font-medium w-16">
                      {month}
                    </div>
                  ))}
                </div>

                {/* Contribution Grid */}
                <div className="flex gap-1 overflow-x-auto pb-4">
                  {/* Day Labels */}
                  <div className="flex flex-col gap-1 pt-2">
                    <div className="text-xs text-muted-foreground font-medium h-4" />
                    {['Mon', 'Wed', 'Fri'].map((day) => (
                      <div key={day} className="text-xs text-muted-foreground font-medium h-4 w-8">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Weeks and Days Grid */}
                  <div className="flex gap-1">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {week.map((day, dayIndex) => {
                          const dayDate = day ? new Date(day.date) : null;
                          const dayName = dayDate?.toLocaleString('en-US', { weekday: 'short' });
                          
                          return (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`w-4 h-4 rounded-sm transition-all duration-200 cursor-pointer transform hover:scale-110 ${getContributionColor(day?.count || 0)} shadow-sm hover:shadow-md`}
                              title={day ? `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString('en-US', { 
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}` : 'No data'}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">Less</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-sm bg-slate-700/30" title="0 contributions" />
                      <div className="w-4 h-4 rounded-sm bg-emerald-900/50" title="1-25% contributions" />
                      <div className="w-4 h-4 rounded-sm bg-emerald-700/70" title="26-50% contributions" />
                      <div className="w-4 h-4 rounded-sm bg-emerald-600/90" title="51-75% contributions" />
                      <div className="w-4 h-4 rounded-sm bg-emerald-500" title="76%+ contributions" />
                    </div>
                    <span className="text-xs text-muted-foreground">More</span>
                  </div>
                  <a 
                    href="https://github.com/amirsiddiquiin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Stats Summary */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in delay-500">
            <div className="rounded-xl bg-card border border-border/60 p-6">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                Total Activity
              </h4>
              <p className="text-3xl font-bold text-primary mb-2">
                {totalContributions.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">contributions in the past year</p>
            </div>
            
            <div className="rounded-xl bg-card border border-border/60 p-6">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-blue-500" />
                Consistency
              </h4>
              <p className="text-3xl font-bold text-primary mb-2">
                {daysActive}
              </p>
              <p className="text-xs text-muted-foreground">{Math.round((daysActive / 365) * 100)}% of days active</p>
            </div>
            
            <div className="rounded-xl bg-card border border-border/60 p-6">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Longest Streak
              </h4>
              <p className="text-3xl font-bold text-primary mb-2">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">consecutive days with contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
