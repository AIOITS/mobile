import { View, Text } from 'react-native';
import React from 'react';
import AuthComponent from '../../components/Auth/AuthComponent';

const RegisByPhone = () => {
  return (
    <AuthComponent
      header="Daftar"
      subHeader="Pastikan data diri sesuai"
      title="Nomor Telepon"
      placeholder="081234567898"
      navigateToOne="RegisterByEmail"
      navigateToTwo="RegisterByPhone"
      register
    />
  );
};

export default RegisByPhone;
