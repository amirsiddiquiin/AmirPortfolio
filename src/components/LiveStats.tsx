import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, Zap, Sparkles } from "lucide-react";
import { achievements, profile } from "@/data/profile";

const LiveStats = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              Achievements
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Recognition and <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Momentum</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A quick snapshot of the outcomes, awards, and proof points that sit behind the work.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-12">
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary border border-primary/20">
                    {index % 4 === 0 ? <Trophy className="h-6 w-6" /> : index % 4 === 1 ? <BadgeCheck className="h-6 w-6" /> : index % 4 === 2 ? <Zap className="h-6 w-6" /> : <Award className="h-6 w-6" />}
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                    {item.year}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
