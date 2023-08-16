import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

const MyComponent = () => {
  const tw = useTailwind();

  return (
    <View
      style={tw('flex w-full h-full bg-sky-200 items-center justify-center')}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default MyComponent;
