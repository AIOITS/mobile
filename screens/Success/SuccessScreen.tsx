import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Button, Icon } from '@rneui/themed';

const SuccessScreen = () => {
  const tw = useTailwind();

  return (
    <View
      style={tw('bg-primary-light-blue flex-1 items-center justify-center')}>
      <View
        style={[tw('flex flex-col items-center justify-center'), { gap: 15 }]}>
        <Icon
          name="checkcircle"
          type="antdesign"
          size={80}
          color={'white'}
        />
        <Text style={tw('font-bold text-xl text-white')}>
          Pendaftaran Berhasil
        </Text>
        <Text style={tw('mx-3 text-white')}>Silahkan untuk melanjutkan</Text>
      </View>
      <View style={tw('w-full bottom-5 self-end absolute')}>
        <Button
          title="Masuk"
          titleStyle={tw('text-primary-light-blue')}
          buttonStyle={tw('bg-white rounded-lg py-2 mx-3')}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
