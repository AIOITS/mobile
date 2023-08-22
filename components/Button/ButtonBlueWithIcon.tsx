import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';

interface Props {
  titleButton: string;
  children: ReactNode;
  width: number | string;
  onNavigationClick: () => void;
}

const ButtonBlueWithIcon = ({
  titleButton,
  children,
  width,
  onNavigationClick,
}: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      onPress={onNavigationClick}
      style={[
        tw(
          'flex flex-row items-center justify-center rounded-lg py-3 bg-primary-light-blue',
        ),
        { width: width, gap: 10 },
      ]}>
      <Text style={tw('text-white font-semibold text-sm')}>{titleButton}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonBlueWithIcon;
