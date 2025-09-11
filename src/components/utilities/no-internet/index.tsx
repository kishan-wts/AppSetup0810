import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BaseContainer from '../base-container';
import { NoInternetSvgComponent } from '@/assets/svg';
import AppText from '../app-text/app-text';
import { COLORS } from '@/theme';
import LocalizeText from '@/localization/text-localize';

type NoInternetType = {};

const NoInternet: React.FC<NoInternetType> = ({}) => {
  const { labels, buttons } = LocalizeText;
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaProvider>
      <BaseContainer>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <NoInternetSvgComponent />

            <AppText color={COLORS.light.primary} style={styles.textTitle}>
              {labels.networkUnavailable}
            </AppText>

            <AppText style={styles.textSubTitle} color={COLORS.light.colorRed}>
              {labels.checkInternetConnection}
            </AppText>
          </View>
        </View>
      </BaseContainer>
    </SafeAreaProvider>
  );
};

export { NoInternet };
