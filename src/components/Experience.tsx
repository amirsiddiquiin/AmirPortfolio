
import { useState } from 'react';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Alloc8 (MeowFi)",
    location: "Remote",
    position: "Senior Full Stack Engineer — Sole Developer",
    period: "2024 – Present",
    description: "AI-powered DeFi liquidity automation platform deployed across Arbitrum and Base.",
    achievements: [
      "Built ERC-4337 smart wallet infrastructure enabling gasless, programmable DeFi transactions.",
      "Implemented full Uniswap V3 LP lifecycle management including mint, increase, collect, and migrate.",
      "Engineered multi-chain abstraction layer with gas estimation, slippage protection, and failure recovery.",
      "Developed 47+ reusable UI components and 23 custom React hooks for scalable Web3 architecture.",
      "Maintained 99.9% uptime from protocol integrations to production deployment."
    ],
    technologies: ["React", "TypeScript", "Web3.js", "ERC-4337", "Uniswap V3", "Arbitrum", "Base"]
  },
  {
    company: "MagpieXYZ",
    location: "Remote",
    position: "Frontend Engineer",
    period: "Mar 2023 – Present",
    description: "Suite of DeFi protocols enhancing participation and user opportunities across DeFi.",
    achievements: [
      "Built core UI for Peegi Bank — blockchain lending/borrowing with integrated token swap.",
      "Developed Magpie and Pendpie staking, claim, and borrowing pages used by thousands of users.",
      "Shipped cross-chain bridge platform for seamless token transfers across multiple networks.",
      "Developed the Magpie landing page, improving brand visibility and user acquisition."
    ],
    technologies: ["React", "Redux", "TypeScript", "Web3", "CCIP", "DeFi", "Cypress"]
  },
  {
    company: "Polkabridge.org",
    location: "Remote",
    position: "Frontend Engineer",
    period: "Jun 2021 – Jan 2023",
    description: "Decentralized bridge and DeFi platform across Polygon, BSC, and Harmony networks.",
    achievements: [
      "Built and launched staking + IDO launchpad integrated with Polygon, BSC, and Harmony.",
      "Developed Corgib NFT marketplace for buying/selling NFTs on BSC using React, Redux, and Web3.",
      "Created farming platform supporting LP token staking on BSC network."
    ],
    technologies: ["TypeScript", "JavaScript", "React", "Redux", "Web3", "Ethers.js"]
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// EXPERIENCE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Where I've built
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              4+ years shipping production Web3 & DeFi interfaces across multiple chains.
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`rounded-xl border overflow-hidden transition-all duration-300 fade-in ${
                  expandedIndex === index 
                    ? 'bg-card border-primary/20 glow-sm' 
                    : 'bg-card/50 border-border/40 hover:border-border'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-start"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 mt-1 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>
                    
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
