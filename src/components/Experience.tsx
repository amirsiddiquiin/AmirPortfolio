
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Building2, ExternalLink, ChevronRight, Briefcase, Award, TrendingUp } from 'lucide-react';
import { experience } from '@/data/profile';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            >
              <Briefcase className="h-4 w-4" />
              Professional Journey
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Work <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Building frontend systems for Web3, DeFi, and data-intensive products across innovative companies.
            </motion.p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15, type: 'spring', stiffness: 50 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {index === 0 && (
                          <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-xs font-medium text-primary"
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            Current Role
                          </motion.span>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      <motion.h3 
                        className="text-2xl font-bold mb-2"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.role}
                      </motion.h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Building2 className="h-5 w-5" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.summary}</p>
                  
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((achievement, i) => (
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
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
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
                    {index === 0 && (
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        <Award className="h-4 w-4" />
                        <span>Active</span>
                      </motion.div>
                    )}
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

export default Experience;
