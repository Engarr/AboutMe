'use client';

import React, { useEffect, useState, createContext, useContext } from 'react';

type ThemeType = 'light' | 'dark';

type TheneContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const TheneContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: TheneContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as ThemeType | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <TheneContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </TheneContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(TheneContext);
  if (context === null) {
    throw new Error('useTheme must be used within an ThemeContextProvider');
  }
  return context;
};
