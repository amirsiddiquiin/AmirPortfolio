
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, Sparkles } from 'lucide-react';
import { experience } from '@/data/profile';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// EXPERIENCE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              The work behind the portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              A short map of the teams and products where I’ve shipped frontend systems that needed to be fast, trustworthy, and easy to operate.
            </p>
          </div>

          <div className="relative space-y-5">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`tilt-card rounded-[1.75rem] border overflow-hidden transition-all duration-300 fade-in ${
                  expandedIndex === index 
                    ? 'bg-background/85 border-primary/20 shadow-2xl shadow-primary/10' 
                    : 'bg-card/75 border-border/60 hover:border-primary/20'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                whileHover={{ y: -8, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-start gap-6"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Sparkles className="h-3.5 w-3.5" />
                          Current role
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 mt-1 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{exp.summary}</p>
                    
                    <ul className="grid gap-3 mb-5">
                      {exp.bullets.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground rounded-2xl border border-border/50 bg-background/50 p-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 text-xs font-mono font-medium rounded-full border border-primary/15 bg-primary/10 text-primary"
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
