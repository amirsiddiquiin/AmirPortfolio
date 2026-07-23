
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Building2, ExternalLink, ChevronRight } from 'lucide-react';
import { experience } from '@/data/profile';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20 scroll-mt-24" style={{ perspective: '1000px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            >
              <Building2 className="h-4 w-4" />
              Experience
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Where I've <span className="gradient-text">Worked</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A journey through building frontend systems for Web3, DeFi, and data-intensive products.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/40 transform md:-translate-x-1/2" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 20, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1, type: 'spring', stiffness: 50 }}
                className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0, rotateZ: 180 }}
                  animate={{ scale: 1, rotateZ: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.3, rotateZ: 90 }}
                  className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 z-10"
                />
                
                {/* Content */}
                <div className="ml-16 md:ml-0 md:px-12">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.02,
                      rotateX: 5,
                      rotateY: 5,
                      z: 30,
                      boxShadow: '0 20px 40px rgba(var(--primary), 0.12)'
                    }}
                    className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                      <motion.h3 
                        className="text-xl font-semibold"
                        whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.role}
                      </motion.h3>
                      {index === 0 && (
                        <motion.span 
                          whileHover={{ scale: 1.1, rotateZ: 5 }}
                          className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          Current
                        </motion.span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-primary flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{exp.summary}</p>
                    
                    <ul className="grid gap-2 mb-4">
                      {exp.bullets.slice(0, 3).map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <motion.div
                            whileHover={{ rotate: 90, scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          </motion.div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.slice(0, 4).map((tech, i) => (
                        <motion.span 
                          key={i}
                          whileHover={{ scale: 1.15, rotateZ: 4, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-2 py-1 text-xs font-mono font-medium rounded-md border border-primary/20 bg-primary/5 text-primary cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
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
