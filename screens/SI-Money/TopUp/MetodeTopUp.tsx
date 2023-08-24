import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import MetodePembayaran from '../../../components/Pembayaran/MetodePembayaran';
import { useNavigation } from '@react-navigation/native';
import { MoneyNavigationProps } from '../../../navigator/Money/MoneyNavigationProp';

const MetodeTopUp = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MoneyNavigationProps>();

  return (
    <MetodePembayaran
      title="Top Up"
      withoutTotal
      onButtonClick={() => navigation.navigate('NominalTopUp')}
    />
  );
};

export default MetodeTopUp;
