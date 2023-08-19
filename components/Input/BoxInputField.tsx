import { TextInput } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

const BoxInputField = () => {
  const tw = useTailwind();

  return (
    <TextInput
      style={tw(
        'bg-secondary-white p-5 rounded-lg text-center text-3xl font-bold',
      )}
    />
  );
};

export default BoxInputField;
