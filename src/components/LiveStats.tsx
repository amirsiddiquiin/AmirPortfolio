import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, Zap } from "lucide-react";
import { achievements, profile } from "@/data/profile";

const LiveStats = () => {
  return (
    <section id="achievements" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// ACHIEVEMENTS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Recognition and momentum
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in delay-200">
              A quick snapshot of the outcomes, awards, and proof points that sit behind the work.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mb-8">
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="tilt-card rounded-[1.5rem] border border-border/60 bg-card/85 p-5 shadow-xl shadow-black/5 fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
                whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {index % 4 === 0 ? <Trophy className="h-5 w-5" /> : index % 4 === 1 ? <BadgeCheck className="h-5 w-5" /> : index % 4 === 2 ? <Zap className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                </div>
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                className="tilt-card rounded-[1.75rem] border border-border/60 bg-card/85 p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 90}ms` }}
                whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  {item.year}
                </p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
