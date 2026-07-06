
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Building2, ExternalLink, ChevronRight } from 'lucide-react';
import { experience } from '@/data/profile';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            >
              <Building2 className="h-4 w-4" />
              Experience
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className="ml-16 md:ml-0 md:px-12">
                  <div className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Sparkles className="h-3.5 w-3.5" />
                          Current
                        </span>
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
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs font-mono font-medium rounded-md border border-primary/20 bg-primary/5 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
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

export default Experience;
