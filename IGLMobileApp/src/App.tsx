import React from 'react';
import { SafeAreaView } from 'react-native';
import { WalletConnectProvider } from './src/components/WalletConnectProvider';
import { WalletConnectButton } from './src/components/WalletConnectButton';

const App = () => (
  <WalletConnectProvider>
    <SafeAreaView>
      <WalletConnectButton />
    </SafeAreaView>
  </WalletConnectProvider>
);

export default App;