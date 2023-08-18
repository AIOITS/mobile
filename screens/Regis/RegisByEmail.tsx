import React from 'react';
import AuthScreen from '../../components/Auth/AuthScreen';

const RegisByEmail = () => {
  return (
    <AuthScreen
      header="Daftar"
      subHeader="Pastikan data diri sesuai"
      title="Email"
      placeholder="Example@gmail.com"
      register
      navigateToOne="RegisterByEmail"
      navigateToTwo="RegisterByPhone"
    />
  );
};

export default RegisByEmail;
