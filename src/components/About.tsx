
import { motion } from 'framer-motion';
import { Briefcase, Code2, Layers3, Sparkles, Target, Zap, Award, Users, TrendingUp } from 'lucide-react';
import { highlights, profile } from '@/data/profile';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            >
              <Target className="h-4 w-4" />
              About Me
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Building the future of <span className="gradient-text">Web3 interfaces</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              {profile.summary}
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-xl border border-border/60 bg-card/80 p-6 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              What I Do
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Frontend Architecture</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building scalable, maintainable frontend systems with React, TypeScript, and modern best practices.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Layers3 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Web3 Integration</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connecting smart contracts to user-friendly interfaces with wallet integration and transaction handling.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Product Design</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creating intuitive user experiences that make complex protocols accessible and trustworthy.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Key Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-xl border border-border/60 bg-card/80 p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    {index === 0 ? <Layers3 className="h-6 w-6 text-primary" /> : index === 1 ? <Code2 className="h-6 w-6 text-primary" /> : <Sparkles className="h-6 w-6 text-primary" />}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
