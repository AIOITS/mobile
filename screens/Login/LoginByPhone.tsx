import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import AuthScreen from '../../components/Auth/AuthScreen';

const LoginByPhone = () => {
  return (
    <AuthScreen
      header="Masuk"
      subHeader="Isi data yang telah didaftarkan"
      title="Nomor Telepon"
      placeholder="081234567898"
      navigateToOne="LoginByEmail"
      navigateToTwo="LoginByPhone"
    />
  );
};

export default LoginByPhone;
