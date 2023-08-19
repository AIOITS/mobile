import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoBlockDisplay from './InfoBlockDisplay';

interface Props {
  subsidi?: boolean;
  title: string;
  date: string;
  volume: string;
}

const InfoPengisianText = ({ subsidi, title, date, volume }: Props) => {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw('flex flex-row items-center justify-start w-full'),
        { gap: 8 },
      ]}>
      <View style={{ flexDirection: 'row', width: 70 }}>
        <Text
          style={tw(
            `text-xs rounded-md p-1 text-white font-light ${
              subsidi ? 'bg-strong-pink' : 'bg-primary-light-blue'
            }`,
          )}>
          {subsidi ? 'Subsidi' : 'Non Subsidi'}
        </Text>
      </View>
      <InfoBlockDisplay
        title={title}
        subTitle={date}
        titleStyle="text-cape-storm text-base"
        subTitleStyle="text-cape-storm text-xs font-normal"
        gap={1}
      />
      <Text style={tw('text-lg text-right flex-1')}>{volume}</Text>
    </View>
  );
};

export default InfoPengisianText;
