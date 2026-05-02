
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Palette } from 'lucide-react';
import { useState } from 'react';

export const ThemeToggle = () => {
  const { theme, themeColor, toggleTheme, setThemeColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="relative flex items-center space-x-2">
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
      
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}
        className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-label="Change theme color"
      >
        <Palette className="h-5 w-5 text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text animate-pulse" />
      </button>
      
      {showColorPicker && (
        <div className="absolute top-full right-0 mt-2 p-2 rounded-lg bg-background/90 backdrop-blur-md border border-border shadow-lg z-50 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex space-x-2">
            <button
              onClick={() => {
                setThemeColor('default');
                setShowColorPicker(false);
              }}
              className={`w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 transition-transform hover:scale-110 ${
                themeColor === 'default' ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
              }`}
              aria-label="Default theme"
            />
            <button
              onClick={() => {
                setThemeColor('blue');
                setShowColorPicker(false);
              }}
              className={`w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 transition-transform hover:scale-110 ${
                themeColor === 'blue' ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
              }`}
              aria-label="Blue theme"
            />
          </div>
        </div>
      )}
    </div>
  );
};
