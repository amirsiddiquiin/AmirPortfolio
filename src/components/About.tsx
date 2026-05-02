
import { Code, Briefcase, GraduationCap, Zap, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: <Briefcase className="h-5 w-5" />, label: "4+ Years", desc: "Production experience" },
  { icon: <Code className="h-5 w-5" />, label: "20+ Projects", desc: "DeFi, NFT, Staking" },
  { icon: <TrendingUp className="h-5 w-5" />, label: "30% Engagement", desc: "UI/UX improvements" },
  { icon: <Zap className="h-5 w-5" />, label: "40% Faster", desc: "Performance optimization" },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              React, Web3 & DeFi Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed fade-in delay-200">
              Adept at translating complex on-chain logic into intuitive user experiences, with deep expertise in wallet integrations, multichain architectures, and scalable component systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="rounded-xl bg-card border border-border/60 p-5 text-center hover-lift fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                  {item.icon}
                </div>
                <p className="text-xl font-bold mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-card border border-border/60 p-6 hover-lift fade-in delay-100">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Web3 Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ERC-4337 smart wallets, Uniswap V3 LP management, cross-chain bridges, and DeFi protocol integrations.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border/60 p-6 hover-lift fade-in delay-200">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Frontend Architecture</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                47+ reusable components, 23 custom hooks, scalable design systems with React, TypeScript, and Tailwind.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border/60 p-6 hover-lift fade-in delay-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">MCA Graduate</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Master's in Computer Application from Aligarh Muslim University with a BSc in Statistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
