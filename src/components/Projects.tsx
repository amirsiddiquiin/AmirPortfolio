
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Github, Globe, ArrowUpRight, Calendar, Tag, Layers } from 'lucide-react';
import { projects } from '@/data/profile';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              Featured Projects
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Building <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Impactful</span> Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              From Web3 protocols to marketing websites, each project represents a commitment to clean code and exceptional user experiences.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15, type: 'spring', stiffness: 50 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary"
                        >
                          {project.tag}
                        </motion.div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {project.period}
                        </div>
                      </div>
                      <motion.h3 
                        className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-xl bg-primary/10 text-primary"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Key Highlights</span>
                    </div>
                    <ul className="space-y-2">
                      {project.bullets.slice(0, 3).map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.15 + i * 0.08 }}
                          whileHover={{ x: 4 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <motion.span 
                          key={i}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.15 + i * 0.05 }}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>{project.tag}</span>
                    </div>
                    <div className="flex gap-3">
                      <motion.button 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 border border-border/60 hover:border-primary/30 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 border border-border/60 hover:border-primary/30 transition-all duration-300"
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
