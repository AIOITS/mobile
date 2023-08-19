import React from 'react';
import AuthComponent from '../../components/Auth/AuthComponent';

const RegisByEmail = () => {
  return (
    <AuthComponent
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
