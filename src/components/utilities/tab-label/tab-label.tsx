import {StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {COLORS} from '@/theme';
import AppText from '../app-text/app-text';

type TabLabelProps = {
  value: string;
  focused: boolean;
};

const TabLabel = ({value, focused}: TabLabelProps) => {
  const colorScheme = useColorScheme() || 'light';
  return (
    <View style={styles.mainContainer}>
      <AppText
        weight="Medium"
        size={14}
        color={COLORS[colorScheme].white}
        numberOfLines={1}
        style={styles.labelStyle}>
        {value}
      </AppText>
    </View>
  );
};

export default TabLabel;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: scale(5),
    // justifyContent: 'center',
  },
  labelStyle: {
    textAlign: 'center',
    width: '100%',
  },
});
