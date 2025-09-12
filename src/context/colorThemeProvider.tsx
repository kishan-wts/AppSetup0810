// src/context/ColorThemeProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { COLORS } from '@/theme/colors';

type ThemeColors = typeof COLORS.light;

const ColorThemeContext = createContext<ThemeColors>(COLORS.light);

export const ColorThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [colorScheme, setColorScheme] = useState(
    Appearance.getColorScheme() ?? 'light',
  );

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme ?? 'light');
    });

    return () => listener.remove();
  }, []);

  const theme = colorScheme === 'dark' ? COLORS.dark : COLORS.light;

  return (
    <ColorThemeContext.Provider value={theme}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorThemeContext);
