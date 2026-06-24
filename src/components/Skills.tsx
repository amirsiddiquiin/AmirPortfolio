
import { motion } from 'framer-motion';
import { Blocks, LayoutGrid, Wrench } from 'lucide-react';
import { skills } from '@/data/profile';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// SKILLS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              The stack I reach for
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              The tools that show up repeatedly in the products above: frontend foundations, Web3 integration, performance, accessibility, and the systems around them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                className="tilt-card rounded-[1.75rem] bg-card/85 border border-border/60 p-5 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
                whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {index % 3 === 0 ? <LayoutGrid className="h-5 w-5" /> : index % 3 === 1 ? <Blocks className="h-5 w-5" /> : <Wrench className="h-5 w-5" />}
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
