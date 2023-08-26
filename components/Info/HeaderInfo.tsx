import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/base';

interface Props {
  title: string;
}

const HeaderInfo = ({ title }: Props) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex flex-row justify-between items-center')}>
      <Text style={tw('text-cape-storm font-semibold text-sm')}>{title}</Text>
      <TouchableOpacity>
        <Icon
          name="info-circle"
          type="font-awesome-5"
          size={25}
          color={'#00A0F3'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderInfo;
