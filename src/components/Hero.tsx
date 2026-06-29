import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Mail, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

const riseUp = {
  initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const panelMotion = {
  initial: { opacity: 0, y: 26, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const floatMotion = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 0.6, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/18 blur-[120px]" />
        <div className="absolute top-20 -left-24 h-80 w-80 rounded-full bg-accent/22 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/12 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.28)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.28)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.16),transparent_40%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.12),transparent_34%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid items-start sm:items-center gap-10 sm:grid-cols-[0.95fr_1.05fr] lg:grid-cols-[0.95fr_1.05fr] px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={panelMotion}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 sm:order-1 relative panel-3d tilt-card rounded-[2.5rem] border border-border/60 bg-background/88 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl shadow-black/5"
          >
            <motion.div
              variants={riseUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.03 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-background/60 backdrop-blur-md text-sm font-medium text-primary shadow-lg shadow-primary/5"
            >
              <Sparkles className="h-4 w-4" />
              <span>{profile.availability}</span>
            </motion.div>

            <motion.h1
              variants={riseUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.75, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance"
            >
              <span className="block text-muted-foreground font-medium text-xl sm:text-2xl mb-4">
                {profile.title}
              </span>
              Amir
              <span className="gradient-text"> Siddiqui</span>
            </motion.h1>

            <motion.p
              variants={riseUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.75, delay: 0.16 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              variants={riseUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.75, delay: 0.22 }}
              className="hidden sm:block text-base sm:text-lg text-muted-foreground/90 max-w-2xl leading-relaxed mb-10"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={riseUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.75, delay: 0.28 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                <Mail className="h-4 w-4" />
                Start a conversation
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border/80 bg-background/70 backdrop-blur-md text-foreground font-medium transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                View experience
              </a>

              <a
                href={profile.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-xl border border-primary/20 bg-primary/5 text-primary font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              variants={riseUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.75, delay: 0.34 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
            >
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 backdrop-blur-md hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 backdrop-blur-md hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Remote-first, product-minded frontend work
              </span>
            </motion.div>
          </motion.div>

          {/* <motion.div
            variants={panelMotion}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 sm:order-2 relative panel-3d tilt-card rounded-[2.5rem] border border-white/10 text-white backdrop-blur-2xl shadow-2xl shadow-primary/25 overflow-hidden"
            style={{
              background:
                'radial-gradient(circle at top, rgba(74, 115, 255, 0.34), rgba(5, 10, 22, 0.98) 55%)',
              minHeight: '420px',
              height: 'clamp(420px, 48vw, 760px)',
            }}
          >
            <div className="absolute inset-0 mesh-overlay opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(96,165,250,0.28),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(168,85,247,0.2),transparent_24%)]" />
            <div className="absolute inset-0 scan-lines opacity-18" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_20%,transparent_80%,rgba(255,255,255,0.06))] opacity-50" />

            <motion.div
              initial={{ opacity: 0, x: -12, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="absolute left-5 sm:left-8 top-5 sm:top-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/12 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
              live avatar render
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="absolute right-5 sm:right-8 top-5 sm:top-8 rounded-2xl border border-white/10 bg-white/12 px-3 py-2 text-xs font-mono text-white/85 backdrop-blur-md"
            >
              UI / UX / Web3
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
              <motion.div
                animate={{ y: [0, -12, 0], rotateZ: [0, -0.8, 0], scale: [1, 1.015, 1] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex h-[340px] sm:h-[420px] lg:h-[680px] w-full max-w-[560px] lg:max-w-[700px] items-center justify-center"
              >
                <div className="absolute left-1/2 top-2 h-[300px] w-[300px] sm:h-[440px] sm:w-[440px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
                <div className="absolute left-1/2 top-10 h-[210px] w-[210px] sm:h-[320px] sm:w-[320px] -translate-x-1/2 rounded-full bg-accent/24 blur-[110px]" />
                <div className="absolute inset-x-[18%] bottom-8 h-10 rounded-full bg-black/45 blur-2xl" />

                <motion.div
                  animate={{ scale: [1, 1.03, 1], opacity: [0.98, 1, 0.98] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-white/10 bg-white/6 p-3 sm:p-5 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_28%,transparent_72%,rgba(255,255,255,0.08))] opacity-60" />
                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(4,8,18,0.92))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(96,165,250,0.28),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(168,85,247,0.22),transparent_24%)]" />
                    <div className="absolute inset-0 scan-lines opacity-20" />
                      <motion.img
                        src="/avatar.webp"
                        alt="3D programmer avatar"
                        initial={{ opacity: 0, y: 16, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.12 }}
                      className="relative mx-auto h-[86%] sm:h-[92%] w-auto max-w-none select-none object-contain drop-shadow-[0_32px_52px_rgba(0,0,0,0.55)]"
                      style={{ filter: 'drop-shadow(0 0 44px rgba(96,165,250,0.28))' }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={floatMotion}
                  animate="animate"
                  className="absolute left-0 top-[6.5rem] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-md"
                >
                  <p className="text-xs text-white/55">Motion systems</p>
                  <p className="text-sm font-medium text-white">Cinematic layering</p>
                </motion.div>
                <motion.div
                  variants={floatMotion}
                  animate="animate"
                  className="absolute right-0 top-[8.25rem] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-md"
                  style={{ animationDelay: '1s' }}
                >
                  <p className="text-xs text-white/55">3D depth</p>
                  <p className="text-sm font-medium text-white">Glass / glow / orbit</p>
                </motion.div>
                <motion.div
                  variants={floatMotion}
                  animate="animate"
                  className="absolute left-6 bottom-[4.5rem] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-md"
                  style={{ animationDelay: '0.6s' }}
                >
                  <p className="text-xs text-white/55">Shader mood</p>
                  <p className="text-sm font-medium text-white">Pulse + bloom</p>
                </motion.div>
                <motion.div
                  variants={floatMotion}
                  animate="animate"
                  className="absolute right-4 bottom-[4.9rem] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-md"
                  style={{ animationDelay: '1.4s' }}
                >
                  <p className="text-xs text-white/55">Avatar core</p>
                  <p className="text-sm font-medium text-white">Digital body scene</p>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 hidden gap-3 lg:grid sm:grid-cols-2">
              {profile.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/12 p-4 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-md"
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/65">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-[6.1rem] px-5 hidden lg:block">
              <div className="rounded-full border border-white/10 bg-white/8 px-5 py-3 backdrop-blur-md flex items-center justify-between text-xs sm:text-sm text-white/80">
                <span className="font-mono tracking-[0.3em]">NOW PLAYING</span>
                <span>Scroll-driven motion • layered glass • cinematic lighting</span>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
