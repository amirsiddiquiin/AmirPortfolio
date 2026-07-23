
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Target } from 'lucide-react';
import { education } from '@/data/profile';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            >
              <GraduationCap className="h-4 w-4" />
              Education
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Academic <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Background</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              My educational journey in computer science and statistics.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                      <p className="text-primary font-semibold mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
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

export default Education;
