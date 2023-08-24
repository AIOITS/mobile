import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Pembayaran from '../../../components/Pembayaran/Pembayaran';
import { useNavigation } from '@react-navigation/native';
import { MoneyNavigationProps } from '../../../navigator/Money/MoneyNavigationProp';

const BayarTopUp = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MoneyNavigationProps>();

  return (
    <Pembayaran onButtonClick={() => navigation.navigate('SuccessTopUp')} />
  );
};

export default BayarTopUp;
