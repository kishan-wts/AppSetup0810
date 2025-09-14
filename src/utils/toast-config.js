import React from 'react';
import { StyleSheet } from 'react-native';
import * as RnToast from 'react-native-toast-message';
import { getModerateScaleValue } from '@/theme/global-styles';
import { normalizeText } from './responsive-text';
import { FONTS } from '@/theme';
import { useAppTheme } from '@/context';

// return null
export const toastConfig = {
  success: props => (
    <RnToast.BaseToast
      {...props}
      style={styles.container(
        useAppTheme().colors.primary,
        useAppTheme().colors.white,
      )}
      text1NumberOfLines={0}
      text1Style={styles.text1Style(useAppTheme().colors.primary)}
    />
  ),
  error: props => (
    <RnToast.BaseToast
      {...props}
      style={styles.container(
        useAppTheme().colors.colorRed,
        useAppTheme().colors.white,
      )}
      text1NumberOfLines={0}
      text1Style={styles.text1Style(useAppTheme().colors.primary)}
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
  container: (color = useAppTheme().primary, color2 = useAppTheme().white) => ({
    height: 'auto',
    width: '85%',
    borderLeftColor: color,
    paddingVertical: getModerateScaleValue(10),
    backgroundColor: color2,
  }),
  text1Style: color => ({
    fontFamily: FONTS.Medium,
    fontSize: normalizeText(11),
    color: color,
    letterSpacing: 0.5,
    marginVertical: getModerateScaleValue(0.5),
  }),
});
