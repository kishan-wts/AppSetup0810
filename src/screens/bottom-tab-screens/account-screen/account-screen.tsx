import {useColorScheme, View} from 'react-native';
import React from 'react';
import {AppText, BaseContainer} from '@/components/utilities';
import {COLORS} from '@/theme';
import styles from './account-screen-styles';
import { show_log } from '@/constants';

// import styles from './home-screen-styles';
// import {styles} from './home-screen-styles';
// import { AppText } from '@/components'
// import AppText from '@/components/app-text/app-text'

export function AccountScreen() {
  return (
    <BaseContainer isBottomSafeArea={false}>
      <View style={styles.container}>
        <AppText fontFamily="Medium" size={20} color={COLORS.light.Black}>
          Account Screen
        </AppText>
        <AppText fontFamily="Light" size={14} color={COLORS.light.Black}>
          Text-Light-14
        </AppText>
        <AppText fontFamily="Regular" size={14} color={COLORS.light.Black}>
          Text-Regular-14
        </AppText>
        <AppText fontFamily="Medium" size={14} color={COLORS.light.Black}>
          Text-Medium-14
        </AppText>
        <AppText fontFamily="Bold" size={14} color={COLORS.light.Black}>
          Text-Bold-14
        </AppText>
        <AppText fontFamily="SemiBold" size={14} color={COLORS.light.Black}>
          Text-SemiBold-14
        </AppText>
        <AppText onPress={()=>{show_log('red','red')}} fontFamily="Thin" size={14} color={COLORS.light.Black}>
          Text-Thin-14
        </AppText>
      </View>
    </BaseContainer>
  );
}
