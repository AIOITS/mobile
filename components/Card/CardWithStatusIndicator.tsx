import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import OptionWithStatusIndicator from '../Info/OptionWithStatusIndicator';
import { Divider } from '@rneui/themed';
import SIMoneySVG from '../../assets/money/si-money.svg';

interface Props {
  title: string;
}

const CardWithStatusIndicator = () => {
  const tw = useTailwind();

  return (
    <View>
      <Text style={tw('text-cape-storm text-base font-semibold')}>
        Si Money
      </Text>
      <OptionWithStatusIndicator title="Si Money">
        <SIMoneySVG width={40} />
      </OptionWithStatusIndicator>
      <Divider color="gray" />
    </View>
  );
};

export default CardWithStatusIndicator;
