
import { motion } from 'framer-motion';
import { Blocks, LayoutGrid, Wrench, Cpu, Database, Globe, Code, Zap, Layers } from 'lucide-react';
import { skills } from '@/data/profile';

const skillIcons = [Code, LayoutGrid, Wrench, Cpu, Database, Globe, Zap, Layers, Blocks];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 scroll-mt-24" style={{ perspective: '1000px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            >
              <Zap className="h-4 w-4" />
              Skills
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
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
                  initial={{ opacity: 0, y: 30, rotateX: 20, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.1, type: 'spring', stiffness: 50 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    rotateX: 8,
                    rotateY: 8,
                    z: 40,
                    boxShadow: '0 20px 40px rgba(var(--primary), 0.12)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <motion.h3 
                      className="font-semibold text-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.title}
                    </motion.h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.15, rotateZ: 4, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.03 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {[
              { label: 'Frontend', value: '95%' },
              { label: 'Web3', value: '90%' },
              { label: 'UI/UX', value: '85%' },
              { label: 'Backend', value: '75%' },
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20, rotateX: 15, rotateZ: 5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1, type: 'spring' }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 10,
                  rotateY: 5,
                  z: 30,
                  boxShadow: '0 15px 30px rgba(var(--primary), 0.1)'
                }}
                className="rounded-xl border border-border/60 bg-card/80 p-4"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{skill.label}</span>
                  <motion.span 
                    whileHover={{ scale: 1.2 }}
                    className="text-sm text-primary font-semibold"
                  >
                    {skill.value}
                  </motion.span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.value }}
                    transition={{ duration: 1.2, delay: 1.0 + index * 0.1, ease: 'easeOut' }}
                    whileHover={{ scale: 1.02 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
