import { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, Theme } from './ThemeContext';
import { ThemeColors } from 'interfaces/ThemeColors.ts';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  const [theme, setTheme] = useState<Theme>(storedTheme ?? 'light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeColors: ThemeColors = {
    bgColor: theme === 'light' ? 'bg-white' : 'bg-gray-800',
    textColor: theme === 'light' ? 'text-gray-700' : 'text-slate-100',
    dropDownHover: theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700',
    elementColor: theme === 'light' ? 'bg-slate-300' : 'bg-amber-400',
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>{children}</ThemeContext.Provider>;
}
