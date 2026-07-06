
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl rounded-2xl px-6 py-3' 
            : 'bg-transparent border-transparent px-6 py-3'
        }`}
      >
        <div className="flex items-center justify-between gap-8">
          <a 
            href="#hero" 
            className="text-xl font-bold tracking-tight transition-all hover:scale-105 duration-300"
          >
            <span className="gradient-text">AS</span>
            <span className="text-muted-foreground font-light">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-border/50">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center md:hidden gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:bg-secondary/80 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/98 backdrop-blur-xl pt-24">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground hover:bg-secondary/80 rounded-lg"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          <nav className="container mx-auto px-6 py-8 flex flex-col items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-full text-center text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 py-4 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
