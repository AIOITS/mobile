import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import ConfirmMessage from '../../components/Info/ConfirmMessage';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import {
  BottomTabNavProp,
  MenuScreenNavigationProp,
} from '../../navigator/Menu/Menu';

const SuccessValidasi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<BottomTabNavProp>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('Main')}
      titleButton="Kembali"
      header="Aktivasi Selesai Dilakukan"
      subHeader="Harap menunggu paling lambat 3 hari untuk verifikasi KTP kamu">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessValidasi;
