import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';

interface Props {
  title: string;
  height: number;
}

const NewCard = ({ title, height }: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity style={[{ height: height, overflow: 'hidden' }]}>
      <View
        style={[
          {
            height: 170,
            borderWidth: 1,
            borderColor: '#00A0F3',
            borderStyle: 'dashed',
          },
          tw('items-center justify-center'),
        ]}>
        <Icon
          name="plus-circle"
          type="font-awesome"
          size={25}
          color={'#00A0F3'}
        />
        <Text
          style={tw('text-center text-primary-light-blue text-sm font-light')}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewCard;
