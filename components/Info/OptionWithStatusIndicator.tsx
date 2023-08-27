import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';
import { Divider } from '@rneui/themed';

interface Props {
  children?: ReactNode;
  title: string;
  selected?: boolean;
  notdivider?: boolean;
  onPress?: () => void;
}

const OptionWithStatusIndicator = ({
  children,
  title,
  selected,
  notdivider,
  onPress,
}: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      style={[tw('flex flex-col'), { gap: 10 }]}
      onPress={onPress}>
      <View style={tw('flex flex-row items-center justify-between mx-2')}>
        <View
          style={[
            tw('flex flex-row items-center justify-center'),
            { gap: 20 },
          ]}>
          {children}
          <Text style={tw('text-cape-storm font-semibold')}>{title}</Text>
        </View>
        <View
          style={[
            { width: 23, height: 23, borderRadius: 23 / 2, borderWidth: 2 },
            tw('border-primary-light-blue items-center justify-center'),
          ]}>
          {selected && (
            <View
              style={[
                {
                  width: 14,
                  height: 14,
                  borderRadius: 14 / 2,
                },
                tw('bg-primary-light-blue'),
              ]}></View>
          )}
        </View>
      </View>
      {!notdivider && <Divider color="gray" />}
    </TouchableOpacity>
  );
};

export default OptionWithStatusIndicator;
