import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles, ExternalLink, Briefcase, Zap, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16"
      style={{ perspective: '1000px' }}
    >
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Main Content - Left Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {profile.availability}
              </motion.div>

              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 50 }}
                className="space-y-4"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-foreground">Hi, I'm </span>
                  <motion.span 
                    className="gradient-text"
                    animate={{ 
                      backgroundPosition: ['0% center', '100% center', '0% center'],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: 'linear' 
                    }}
                  >
                    Amir Siddiqui
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-2xl sm:text-3xl text-muted-foreground font-medium"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {profile.title}
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                {profile.headline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotateY: 10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, rotateX: 10, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Mail className="h-4 w-4" />
                  Let's Talk
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, rotateX: 10, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background font-semibold transition-all duration-300 hover:bg-secondary"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Work
                </motion.a>
                <motion.a
                  href={profile.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, rotateX: 10, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary font-semibold transition-all duration-300 hover:bg-primary/10"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-2 rounded-lg border border-border/60 bg-card/50">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.contact.location}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Cards - Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
              className="lg:col-span-5 space-y-4"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid grid-cols-2 gap-4">
                {profile.stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, rotateX: 20, rotateZ: 5 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1, type: 'spring' }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateX: 10, 
                      rotateY: 10, 
                      z: 50,
                      boxShadow: '0 20px 40px rgba(var(--primary), 0.15)'
                    }}
                    className="rounded-xl border border-border/60 bg-card/80 p-5 hover:border-primary/30 transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {index === 0 ? <Briefcase className="h-5 w-5 text-primary" /> : <Zap className="h-5 w-5 text-primary" />}
                      <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotateX: 15, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateX: 5, 
                  rotateY: -5,
                  z: 30,
                  boxShadow: '0 15px 30px rgba(var(--primary), 0.1)'
                }}
                className="rounded-xl border border-border/60 bg-card/80 p-5 hover:border-primary/30 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Core Expertise</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>React & TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Web3 & DeFi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>UI/UX Design</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotateX: 15, rotateY: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateX: -5, 
                  rotateY: 5,
                  z: 30,
                  boxShadow: '0 15px 30px rgba(var(--primary), 0.1)'
                }}
                className="rounded-xl border border-border/60 bg-card/80 p-5 hover:border-primary/30 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Recent Win</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  EthIndia 2024 Hackathon Winner - Built a full-stack dApp in 48 hours
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
