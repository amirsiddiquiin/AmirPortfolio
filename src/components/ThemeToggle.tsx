
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text animate-pulse" />
      ) : (
        <Sun className="h-5 w-5 text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text animate-pulse" />
      )}
    </button>
  );
};
