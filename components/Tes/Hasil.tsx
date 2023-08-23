import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';

interface Props {
  title: string;
  subTitle: string;
}

const Hasil = ({ title, subTitle }: Props) => {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw('flex flex-col rounded-lg bg-primary-light-blue p-5'),
        { gap: 10 },
      ]}>
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
      <Text style={tw('text-white font-bold text-lg text-center')}>
        {title}
      </Text>
      <Text style={tw('text-white text-base text-center font-normal')}>
        {subTitle}
      </Text>
    </View>
  );
};

export default Hasil;
