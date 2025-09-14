import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BaseContainer from '../base-container';
import { NoInternetSvgComponent } from '@/assets/svg';
import AppText from '../app-text/app-text';
import LocalizeText from '@/localization/text-localize';
import { useAppTheme } from '@/context';

type NoInternetType = {};

const NoInternet: React.FC<NoInternetType> = ({}) => {
  const { labels, buttons } = LocalizeText;
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaProvider>
      <BaseContainer>
        <View
          style={{
            ...styles.container,
            backgroundColor: useAppTheme().colors.primary,
          }}
        >
          <View
            style={{
              ...styles.subContainer,
              backgroundColor: useAppTheme().colors.white,
            }}
          >
            <NoInternetSvgComponent />

            <AppText
              color={useAppTheme().colors.primary}
              style={styles.textTitle}
            >
              {labels.networkUnavailable}
            </AppText>

            <AppText
              style={styles.textSubTitle}
              color={useAppTheme().colors.colorRed}
            >
              {labels.checkInternetConnection}
            </AppText>
          </View>
        </View>
      </BaseContainer>
    </SafeAreaProvider>
  );
};

export { NoInternet };
