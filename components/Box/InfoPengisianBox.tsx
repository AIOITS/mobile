import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoPengisianText from '../Info/InfoPengisianText';
import handleDate from '../../utils/convertDate';

interface Props {
  month: string;
  data: HistoryPengisian[] | HistoryEmoney[];
}

const InfoPengisianBox = ({ month, data }: Props) => {
  const tw = useTailwind();

  return (
    <View style={[[tw('flex flex-col items-start justify-start'), { gap: 5 }]]}>
      <Text style={tw('text-lg text-cape-storm font-semibold')}>{month}</Text>
      {data.map((item, index) => (
        <InfoPengisianText
          key={index}
          title={
            'jenis_pengisian' in item
              ? (item as HistoryPengisian).spbu.name
              : (item as HistoryEmoney).nama_spbu
          }
          date={handleDate(item.createdAt)}
          usage={item.kategori_pengisian}
          volume={
            typeof item.jumlah === 'number'
              ? item.jumlah.toFixed(2) + ' L'
              : item.jumlah + ' L'
          }
        />
      ))}
    </View>
  );
};

export default InfoPengisianBox;
