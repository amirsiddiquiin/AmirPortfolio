
import { motion } from 'framer-motion';
import { Blocks, LayoutGrid, Wrench, Cpu, Database, Globe, Code, Zap, Layers } from 'lucide-react';
import { skills } from '@/data/profile';

const skillIcons = [Code, LayoutGrid, Wrench, Cpu, Database, Globe, Zap, Layers, Blocks];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            >
              <Zap className="h-4 w-4" />
              Skills
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Technical <span className="gradient-text">Expertise</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              The tools and technologies I use to build production-grade applications and exceptional user experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => {
              const Icon = skillIcons[index % skillIcons.length];
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Frontend', value: '95%' },
              { label: 'Web3', value: '90%' },
              { label: 'UI/UX', value: '85%' },
              { label: 'Backend', value: '75%' },
            ].map((skill, index) => (
              <div key={index} className="rounded-xl border border-border/60 bg-card/80 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{skill.label}</span>
                  <span className="text-sm text-primary font-semibold">{skill.value}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.value }}
                    transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
