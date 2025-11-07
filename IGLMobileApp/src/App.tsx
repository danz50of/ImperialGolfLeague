import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WalletConnectProvider } from './components/WalletConnectProvider';
import WalletConnectButton from './components/WalletConnectButton';
import icon from '../assets/icon.png';

const App = () => {
  return (
    <SafeAreaProvider>
      <WalletConnectProvider>
        <SafeAreaView>
          <Image source={icon} style={styles.icon} />
          <WalletConnectButton />
        </SafeAreaView>
      </WalletConnectProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default App;