
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Alloc8 (MeowFi)",
    period: "2024 – Present",
    tag: "AI + DeFi",
    description: "AI-powered DeFi liquidity automation platform with ERC-4337 smart wallet infrastructure deployed across Arbitrum and Base.",
    achievements: [
      "Gasless DeFi transactions via ERC-4337 smart wallets",
      "Full Uniswap V3 LP lifecycle management",
      "Multi-chain transaction orchestration with failure recovery",
      "47+ reusable components & 23 custom hooks"
    ],
    technologies: ["React", "TypeScript", "Web3.js", "ERC-4337", "Uniswap V3"],
  },
  {
    title: "PolkaBridge Suite",
    period: "Jun 2021 – Jan 2023",
    tag: "Multichain DeFi",
    description: "Multichain staking platform, IDO launchpad, and NFT marketplace across Polygon, BSC, and Harmony networks.",
    achievements: [
      "Staking platform with cross-network support",
      "IDO launchpad for token launches",
      "Corgib NFT marketplace on BSC",
      "Farming platform for LP token staking"
    ],
    technologies: ["React", "Redux", "Web3", "Ethers.js", "Polygon", "BSC"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Notable work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              Key projects spanning DeFi, NFT, staking, and launchpad platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group rounded-xl bg-card border border-border/60 p-6 hover-lift fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-primary/10 text-primary">
                    {project.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-5">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
