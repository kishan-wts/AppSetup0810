// ThemeContext.tsx
import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { COLORS } from '@/theme';

const lightColors = COLORS.light;
const darkColors = COLORS.dark;
type ThemeType = 'light' | 'dark';
type ThemeColors = typeof lightColors;

interface ThemeContextValue {
  colors: ThemeColors;
  theme: ThemeType;
}

const ThemeContext = createContext<ThemeContextValue>({
  colors: lightColors,
  theme: 'light',
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null
  const theme: ThemeType = scheme === 'dark' ? 'dark' : 'light';

  const value = useMemo(
    () => ({
      colors: theme === 'light' ? lightColors : darkColors,
      theme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
