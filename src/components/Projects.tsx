
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '@/data/profile';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Selected builds
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              A few of the products and hackathon builds that best capture the way I like to work: clear systems, strong motion, and useful details.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group tilt-card rounded-[1.75rem] border border-border/60 bg-card/80 p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
                whileHover={{ y: -10, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary">
                    {project.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                <ul className="space-y-3 mb-6">
                  {project.bullets.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    production-grade frontend
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
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
