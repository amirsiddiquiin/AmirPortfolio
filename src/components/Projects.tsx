
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink, Github, Globe } from 'lucide-react';
import { projects } from '@/data/profile';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            >
              <Sparkles className="h-4 w-4" />
              Projects
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-2xl border border-border/60 bg-card/80 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary">
                      {project.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                  <ul className="space-y-2 mb-5">
                    {project.bullets.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs font-mono font-medium rounded-md border border-primary/20 bg-primary/5 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-primary" />
                      {project.tag}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                        <Github className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                        <Globe className="h-4 w-4" />
                      </button>
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
