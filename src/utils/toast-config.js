import React from 'react';
import {StyleSheet} from 'react-native';
import * as RnToast from 'react-native-toast-message';
import {getModerateScaleValue} from '@/theme/global-styles';
import { COLORS } from '@/theme/colors';
import { normalizeText } from './responsive-text';
import { FONTS } from '@/theme';




// return null
export const toastConfig = {
  success: props => (
    <RnToast.BaseToast
      {...props}
      style={styles.container(COLORS.colorGreen00CE6B, COLORS.tagColor4)}
      text1NumberOfLines={0}
      text1Style={styles.text1Style(COLORS.light.primary)}
    />
  ),
  error: props => (
    <RnToast.BaseToast
      {...props}
      style={styles.container(COLORS.colorRed, COLORS.colorF5E6E4)}
      text1NumberOfLines={0}
      text1Style={styles.text1Style(COLORS.light.primary)}
    />
  ),
  info: props => (
    <RnToast.BaseToast
      {...props}
      style={styles.container()}
      text1NumberOfLines={0}
      text1Style={styles.text1Style()}
    />
  ),
};

const styles = StyleSheet.create({
  container: (color, color2) => ({
    height: 'auto',
    width: '85%',
    borderLeftColor: color ? color : COLORS.light.primary,
    paddingVertical: getModerateScaleValue(10),
    backgroundColor: color2 ? color2 : COLORS.light.white,
  }),
  text1Style: color => ({
    fontFamily: FONTS.Medium,
    fontSize: normalizeText(11),
    color: color ? color : COLORS.light.Black,
    letterSpacing: 0.5,
    marginVertical: getModerateScaleValue(0.5),
  }),
});
