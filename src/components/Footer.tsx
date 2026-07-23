
import { ArrowUp, Github, Linkedin, Mail, Heart, Twitter, Rss, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-border/40 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Amir Siddiqui</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                Senior Frontend Engineer specializing in Web3, DeFi, and production-grade UI systems. Building the future of decentralized interfaces.
              </p>
              <div className="flex gap-3">
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="p-3 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get updates on my latest projects and articles.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  <Rss className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} <span className="font-medium text-foreground">Amir Siddiqui</span>. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & TypeScript
            </div>
            
            <a 
              href="#hero" 
              className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
