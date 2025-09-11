// src/components/AppText.tsx
import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { FONTS, FONT_SIZE } from '@theme/typography';
import { COLORS } from '@/theme';

type FontWeight = keyof typeof FONTS;
type FontSize = keyof typeof FONT_SIZE;

interface AppTextProps extends TextProps {
  fontFamily?: FontWeight;
  size?: FontSize;
  color?: string;
  style?: TextStyle | TextStyle[];
}

export default function AppText({
  fontFamily = 'Regular',
  size = 14,
  color = COLORS.light.Black, // fallback to default text color
  style,
  children,
  ...rest
}: AppTextProps) {
  return (
    <Text
      style={[
        styles.base,
        {
          fontFamily: FONTS[fontFamily],
          fontSize: FONT_SIZE[size],
          color,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
