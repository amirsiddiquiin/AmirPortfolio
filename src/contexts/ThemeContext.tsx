
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeColor = 'default' | 'blue';

type ThemeContextType = {
  theme: Theme;
  themeColor: ThemeColor;
  setTheme: (theme: Theme) => void;
  setThemeColor: (color: ThemeColor) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');

  useEffect(() => {
    const storedThemeColor = localStorage.getItem('themeColor') as ThemeColor | null;

    if (storedThemeColor) {
      setThemeColor(storedThemeColor);
    }

    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('themeColor', themeColor);
    
    // Remove all theme classes
    document.documentElement.classList.remove('dark', 'light', 'theme-blue', 'theme-default');
    
    // Add current theme classes
    document.documentElement.classList.add(theme);
    document.documentElement.classList.add(`theme-${themeColor}`);

    // Add transition effect when changing themes
    document.documentElement.classList.add('theme-transition');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 500);
  }, [theme, themeColor]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeColor, setTheme, setThemeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
