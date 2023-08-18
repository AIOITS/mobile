import React from 'react';
import { Button, Icon } from '@rneui/themed';
import ConfirmMessage from '../../components/ConfirmMessage';

const SuccessScreen = () => {
  return (
    <ConfirmMessage
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
