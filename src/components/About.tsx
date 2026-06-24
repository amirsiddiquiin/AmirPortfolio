
import { motion } from 'framer-motion';
import { Briefcase, Code2, Layers3, Sparkles } from 'lucide-react';
import { highlights, profile } from '@/data/profile';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="space-y-6 fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                About the build
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {profile.summary}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I tend to work where product complexity and visual clarity collide: DeFi dashboards, wallet flows, transaction states, and systems that need to feel trustworthy at first glance.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="tilt-card rounded-2xl border border-border/60 bg-card/80 p-5 shadow-xl shadow-black/5"
                >
                  <Briefcase className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Production ownership</h3>
                  <p className="text-sm text-muted-foreground">
                    Sole frontend engineer on key launches, handling architecture, UX, and the final polish.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -8, rotateX: 3, rotateY: 3 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="tilt-card rounded-2xl border border-border/60 bg-card/80 p-5 shadow-xl shadow-black/5"
                >
                  <Code2 className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Frontend craft</h3>
                  <p className="text-sm text-muted-foreground">
                    Responsive systems, reusable components, state orchestration, and motion with restraint.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-border/60 bg-background/70 backdrop-blur-xl p-6 shadow-2xl shadow-primary/10 panel-3d">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Profile snapshot</p>
                    <h3 className="text-2xl font-bold">What I bring to the table</h3>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-mono text-primary">
                    3D UI refresh
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border/60 bg-card/80 p-4">
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    className="tilt-card rounded-2xl border border-border/60 bg-card/80 p-5 shadow-lg shadow-black/5 fade-in"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      {index === 0 ? <Layers3 className="h-5 w-5" /> : index === 1 ? <Code2 className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
