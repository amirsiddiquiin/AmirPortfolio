import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles, ExternalLink, Briefcase, Zap, Code2, Rocket, Star, TrendingUp } from 'lucide-react';
import { profile } from '@/data/profile';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Main Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {profile.availability}
              </motion.div>

              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
                className="space-y-4"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-foreground">Crafting </span>
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
                    Digital Experiences
                  </span>
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-px w-12 bg-primary/50" />
                  <p className="text-2xl sm:text-3xl text-muted-foreground font-medium">
                    {profile.title}
                  </p>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                {profile.headline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <Mail className="h-4 w-4 group-hover:animate-pulse" />
                  Let's Talk
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm font-semibold hover:bg-secondary hover:border-primary/30 transition-all duration-300"
                >
                  <Rocket className="h-4 w-4" />
                  View Work
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-4 pt-4"
              >
                <motion.a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={profile.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                </motion.a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-2 rounded-xl border border-border/60 bg-card/50">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.contact.location}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Stats & Highlights */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Main Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.4, type: 'spring' }}
                whileHover={{ y: -5, rotate: 2 }}
                className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Impact Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {profile.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl bg-background/50 border border-border/40"
                    >
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: 3 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, Tailwind</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Achievement</h4>
                  <p className="text-sm text-muted-foreground">EthIndia 2024 Winner</p>
                </motion.div>
              </div>

              {/* Highlight Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-primary fill-primary" />
                  <h4 className="font-semibold">Recent Highlight</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a full-stack Web3 dApp that won India's largest hackathon, demonstrating end-to-end product development skills.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
