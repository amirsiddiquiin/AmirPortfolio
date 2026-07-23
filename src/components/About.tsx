
import { motion } from 'framer-motion';
import { Briefcase, Code2, Layers3, Sparkles, Target, Zap, Award, Users, TrendingUp, Rocket, Heart, Lightbulb } from 'lucide-react';
import { highlights, profile } from '@/data/profile';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
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
              Building the future of <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Web3 interfaces</span>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: 'spring' }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 text-center hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
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
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">What I Do</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                    <Code2 className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Frontend Architecture</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building scalable, maintainable frontend systems with React, TypeScript, and modern best practices.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                    <Layers3 className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Web3 Integration</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connecting smart contracts to user-friendly interfaces with wallet integration and transaction handling.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                    <Sparkles className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Product Design</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Creating intuitive user experiences that make complex protocols accessible and trustworthy.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Key Highlights</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1, type: 'spring' }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                      {index === 0 ? <Layers3 className="h-7 w-7 text-primary" /> : index === 1 ? <Code2 className="h-7 w-7 text-primary" /> : <Heart className="h-7 w-7 text-primary" />}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
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
