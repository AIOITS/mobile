import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';

interface Props {
  children: ReactNode;
  titleButton: string;
  gap?: number;
  right?: boolean;
  customButton?: string;
  titleButtonStyle?: string;
  onButtonClick?: () => void;
}

const ButtonIcon = ({
  children,
  titleButton,
  gap,
  right,
  customButton,
  titleButtonStyle,
  onButtonClick,
}: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      onPress={onButtonClick}
      style={[
        tw(
          `px-4 py-3 rounded-lg border-disable ${
            customButton ? customButton : 'bg-secondary-white'
          }`,
        ),
        { borderWidth: 1 },
      ]}>
      <View
        style={[
          tw(
            `flex flex-row items-center ${
              right ? 'justify-end' : 'justify-start'
            }`,
          ),
          { gap: gap ? gap : 10 },
        ]}>
        {!right && children}
        <Text
          style={tw(
            `px-4 ${titleButtonStyle ? titleButtonStyle : 'text-cape-storm'}`,
          )}>
          {titleButton}
        </Text>
        {right && children}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
