
import { Code, Database, Layout, Server, Blocks, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: ["React.js", "TypeScript", "JavaScript", "Next.js", "Redux", "Tailwind CSS", "Material UI"]
  },
  {
    title: "Web3 & Blockchain",
    icon: <Blocks className="h-5 w-5" />,
    skills: ["Web3.js", "Ethers.js", "ERC-4337", "Uniswap V3", "DeFi", "Smart Contracts"]
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Express"]
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools & Testing",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Git", "Cypress", "Google Analytics"]
  },
  {
    title: "Design",
    icon: <Code className="h-5 w-5" />,
    skills: ["UI/UX Design", "Figma", "Responsive Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// SKILLS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Technical stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              Technologies mastered across 4+ years of frontend and Web3 development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="rounded-xl bg-card border border-border/60 p-5 hover-lift fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                    >
                      {skill}
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

export default Skills;
