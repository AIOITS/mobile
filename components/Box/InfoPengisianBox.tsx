import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoPengisianText from '../Info/InfoPengisianText';

interface Props {
  month: string;
  data: {
    subsidi?: boolean;
    title: string;
    date: string;
    volume: string;
  }[];
}

const InfoPengisianBox = ({ month, data }: Props) => {
  const tw = useTailwind();

  return (
    <View style={[[tw('flex flex-col items-start justify-start'), { gap: 5 }]]}>
      <Text style={tw('text-lg text-cape-storm font-semibold')}>{month}</Text>
      {data.map((item, index) => (
        <InfoPengisianText
          key={index}
          title={item.title}
          date={item.date}
          subsidi={item.subsidi}
          volume={item.volume}
        />
      ))}
    </View>
  );
};

export default InfoPengisianBox;
