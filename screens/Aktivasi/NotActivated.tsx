import React from 'react';
import ConfirmMessage from '../../components/Info/ConfirmMessage';
import { useTailwind } from 'tailwind-rn';
import CARDSVG from '../../assets/card-2.svg';
import { useNavigation } from '@react-navigation/native';
import { RegisNavigationProps } from '../../navigator/Auth/RegisNavigationProps';

const NotActivated = () => {
  const tw = useTailwind();
  const navigation = useNavigation<RegisNavigationProps>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('LoginByEmail')}
      titleButton="Aktivasi"
      header="Belum teraktivasi"
      subHeader="Akun kamu belum teraktivasi. Silahkan aktivasi akun kamu dengan menggunakan KTP">
      <CARDSVG
        height={200}
        fill="white"
      />
    </ConfirmMessage>
  );
};

export default NotActivated;
