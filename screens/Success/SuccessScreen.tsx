import React from 'react';
import { Button, Icon } from '@rneui/themed';
import ConfirmMessage from '../../components/Info/ConfirmMessage';
import { useNavigation } from '@react-navigation/native';
import { RegisNavigationProps } from '../../navigator/Auth/RegisNavigationProps';

const SuccessScreen = () => {
  const navigation = useNavigation<RegisNavigationProps>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('LoginByEmail')}
      titleButton="Masuk"
      header="Pendaftaran Berhasil"
      subHeader="Silahkan untuk melanjutkan">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessScreen;
