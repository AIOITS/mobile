import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import AuthScreen from '../../components/Auth/AuthScreen';

const LoginByEmail = () => {
  return (
    <AuthScreen
      header="Masuk"
      subHeader="Isi data yang telah didaftarkan"
      title="Email"
      placeholder="Example@gmail.com"
      navigateToOne="LoginByEmail"
      navigateToTwo="LoginByPhone"
    />
  );
};

export default LoginByEmail;
