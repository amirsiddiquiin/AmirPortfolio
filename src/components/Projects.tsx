
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink, Github, Globe } from 'lucide-react';
import { projects } from '@/data/profile';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20 scroll-mt-24" style={{ perspective: '1000px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            >
              <Sparkles className="h-4 w-4" />
              Projects
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Featured <span className="gradient-text">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A selection of projects that showcase my expertise in building production-grade Web3 applications and modern frontend systems.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 20, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1, type: 'spring', stiffness: 50 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50,
                  boxShadow: '0 25px 50px rgba(var(--primary), 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl border border-border/60 bg-card/80 overflow-hidden hover:border-primary/30 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <motion.span 
                      whileHover={{ scale: 1.05, rotateZ: 2 }}
                      className="px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {project.tag}
                    </motion.span>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>

                  <motion.h3 
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                  <ul className="space-y-2 mb-5">
                    {project.bullets.slice(0, 3).map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <motion.span 
                          className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.1, rotateZ: 3, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-2 py-1 text-xs font-mono font-medium rounded-md border border-primary/20 bg-primary/5 text-primary cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-primary" />
                      {project.tag}
                    </span>
                    <div className="flex gap-2">
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
