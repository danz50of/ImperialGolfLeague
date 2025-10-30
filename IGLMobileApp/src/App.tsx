import React from 'react';
import { SafeAreaView } from 'react-native';
import { WalletConnectProvider } from './components/WalletConnectProvider';
import WalletConnectButton from './components/WalletConnectButton';

const App = () => {
  return (
    <WalletConnectProvider>
      <SafeAreaView>
        <WalletConnectButton />
      </SafeAreaView>
    </WalletConnectProvider>
  );
};

export default App;