import {StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import AppText from '../app-text/app-text';
import { useAppTheme } from '@/context';

type TabLabelProps = {
  value: string;
  focused: boolean;
};

const TabLabel = ({value, focused}: TabLabelProps) => {
  return (
    <View style={styles.mainContainer}>
      <AppText
        fontFamily="Medium"
        size={14}
        color={useAppTheme().colors.white}
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
