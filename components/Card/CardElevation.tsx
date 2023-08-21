import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';

interface Props {
  children: ReactNode;
  onCardClick?: () => void;
  cardStyle?: string;
  elevation?: number;
}

const CardElevation = ({
  children,
  onCardClick,
  cardStyle,
  elevation,
}: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      onPress={onCardClick}
      style={[
        tw(`bg-white rounded-lg ${cardStyle ? cardStyle : ''}`),
        {
          shadowColor: '#171717',
          elevation: elevation ? elevation : 1.5,
        },
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default CardElevation;
