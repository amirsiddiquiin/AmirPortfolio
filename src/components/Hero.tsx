
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary slide-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight slide-up delay-100">
            Amir
            <span className="gradient-text"> Siddiqui</span>
          </h1>

          <p className="text-lg font-mono text-primary/80 mb-4 slide-up delay-200">
            Senior Frontend Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl slide-up delay-300 leading-relaxed">
            4+ years building high-performance <span className="text-foreground font-medium">Web3</span> & <span className="text-foreground font-medium">DeFi</span> interfaces using <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">TypeScript</span>, and <span className="text-foreground font-medium">Web3.js</span>. Specializing in wallet integrations, multichain architectures, and scalable component systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 slide-up delay-400">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Get in touch
            </a>
            
            <a
              href="#experience"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium transition-all hover:scale-105 hover:border-primary/30"
            >
              View experience
            </a>

            <a
              href="/Amir_Siddiqui_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium transition-all hover:scale-105 hover:bg-primary/5"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
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
