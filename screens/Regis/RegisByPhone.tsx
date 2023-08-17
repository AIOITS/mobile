import { View, Text } from 'react-native';
import React from 'react';
import RegistrationScreen from './RegistrationScreen';

const RegisByPhone = () => {
  return (
    <RegistrationScreen
      title="Nomor Telepon"
      placeholder="081234567898"
    />
  );
};

export default RegisByPhone;
