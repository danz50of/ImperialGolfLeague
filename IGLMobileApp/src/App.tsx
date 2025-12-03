import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WalletConnectProvider } from './components/WalletConnectProvider';
import WalletConnectButton from './components/WalletConnectButton';
import WalletAddressInput from './components/WalletAddressInput';
import icon from '../assets/icon.png';

const App = () => {
    // Temporary handler until we wire blockchain queries
  const handleWalletSubmit = (address: string) => {
    console.log('Wallet address entered:', address);
    // TODO: query IGL contract assets here
  };

  return (
    <SafeAreaProvider>
      <WalletConnectProvider>
        <SafeAreaView>
          <Image source={icon} style={styles.icon} />
           {/* <WalletConnectButton /> remove for development */}
          <WalletAddressInput onSubmit={handleWalletSubmit} />
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