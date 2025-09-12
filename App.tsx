/**
 *
 * @format
 */

import React from 'react';

import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from '@/redux/store/store';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/utils';
import Route from '@/routes/routes';
import { ColorThemeProvider } from '@/context';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <ColorThemeProvider>
      <GestureHandlerRootView style={styles.mainContainer}>
        <StoreProvider store={store}>
          <PersistGate persistor={persistedStore} loading={null}>
            <StatusBar barStyle={barStyle} />
            <Route />
            <Toast config={toastConfig} />
          </PersistGate>
        </StoreProvider>
      </GestureHandlerRootView>
    </ColorThemeProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});

export default App;
