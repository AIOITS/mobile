import React from 'react';
import ConfirmMessage from '../../components/ConfirmMessage';
import { useTailwind } from 'tailwind-rn';
import CARDSVG from '../../assets/card-2.svg';

const NotActivated = () => {
  const tw = useTailwind();

  return (
    <ConfirmMessage
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
