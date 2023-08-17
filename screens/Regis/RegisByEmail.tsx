import { View, Text } from 'react-native';
import React from 'react';
import RegistrationScreen from './RegistrationScreen';

const RegisByEmail = () => {
  return (
    <RegistrationScreen
      title="Email"
      placeholder="Example@gmail.com"
    />
  );
};

export default RegisByEmail;
