import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';
import { Button } from '@rneui/themed';

interface Props {
  children: ReactNode;
  header: string;
  subHeader: string;
  titleButton: string;
}

const ConfirmMessage = ({
  children,
  header,
  subHeader,
  titleButton,
}: Props) => {
  const tw = useTailwind();

  return (
    <View
      style={tw('bg-primary-light-blue flex-1 items-center justify-center')}>
      <View
        style={[tw('flex flex-col items-center justify-center'), { gap: 15 }]}>
        {children}
        <Text style={tw('font-bold text-xl text-center text-white')}>
          {header}
        </Text>
        <Text style={tw('mx-3 text-white text-center')}>{subHeader}</Text>
      </View>
      <View style={tw('w-full bottom-5 self-end absolute')}>
        <Button
          title={titleButton}
          titleStyle={tw('text-primary-light-blue')}
          buttonStyle={tw('bg-white rounded-lg py-2 mx-3')}
        />
      </View>
    </View>
  );
};

export default ConfirmMessage;
