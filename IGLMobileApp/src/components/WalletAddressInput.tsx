import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

type WalletAddressInputProps = {
    onSubmit: (address: string) => void;
};

const WalletAddressInput: React.FC<WalletAddressInputProps> = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter wallet address"
        value={address}
        onChangeText={setAddress}
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <Button title="Load Assets" onPress={() => onSubmit(address)} />
    </View>
  );
};

export default WalletAddressInput;