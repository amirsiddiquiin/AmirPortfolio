
import { motion } from 'framer-motion';
import { Blocks, LayoutGrid, Wrench, Cpu, Database, Globe, Code, Zap, Layers, Target, Award, TrendingUp } from 'lucide-react';
import { skills } from '@/data/profile';

const skillIcons = [Code, LayoutGrid, Wrench, Cpu, Database, Globe, Zap, Layers, Blocks];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            >
              <Zap className="h-4 w-4" />
              Technical Arsenal
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Skills & <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Technologies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A comprehensive toolkit for building modern, scalable, and performant web applications.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((category, index) => {
              const Icon = skillIcons[index % skillIcons.length];
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.1, type: 'spring', stiffness: 50 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary border border-primary/20"
                      >
                        <Icon className="h-7 w-7" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.title}
                      </motion.h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((skill, i) => (
                        <motion.span 
                          key={i}
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                          className="px-4 py-2 text-sm font-medium rounded-xl border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Proficiency Levels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Proficiency Levels</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { label: 'Frontend Development', value: 95, icon: Code },
                { label: 'Web3 & Blockchain', value: 90, icon: Blocks },
                { label: 'UI/UX Design', value: 85, icon: Award },
                { label: 'Backend Systems', value: 75, icon: Database },
              ].map((skill, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{skill.label}</span>
                    </div>
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className="text-sm font-bold text-primary"
                    >
                      {skill.value}%
                    </motion.span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, delay: 1.0 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
