import { View } from 'react-native';
import React from 'react';
import { AppText, BaseContainer } from '@/components/utilities';
import styles from './home-screen-styles';
import { useColorTheme } from '@/hooks';

export default function HomeScreen() {
  const COLORS = useColorTheme();

  return (
    <BaseContainer isBottomSafeArea={false}>
      <View style={styles.container}>
        <AppText fontFamily="Light" size={14} color={COLORS.Black}>
          Text-Light-14
        </AppText>
        <AppText fontFamily="Regular" size={14} color={COLORS.Black}>
          Text-Regular-14
        </AppText>
        <AppText fontFamily="Medium" size={14} color={COLORS.Black}>
          Text-Medium-14
        </AppText>
        <AppText fontFamily="Bold" size={14} color={COLORS.Black}>
          Text-Bold-14
        </AppText>
        <AppText fontFamily="SemiBold" size={14} color={COLORS.Black}>
          Text-SemiBold-14
        </AppText>
        <AppText fontFamily="Thin" size={14} color={COLORS.Black}>
          Text-Thin-14
        </AppText>
        <AppText fontFamily="Light" size={20} color="red">
          Text Bold 16
        </AppText>
      </View>
    </BaseContainer>
  );
}
