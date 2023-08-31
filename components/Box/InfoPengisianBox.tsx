import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoPengisianText from '../Info/InfoPengisianText';
import handleDate from '../../utils/convertDate';

interface Props {
  month: string;
  data: HistoryPengisian[];
}

const InfoPengisianBox = ({ month, data }: Props) => {
  const tw = useTailwind();

  return (
    <View style={[[tw('flex flex-col items-start justify-start'), { gap: 5 }]]}>
      <Text style={tw('text-lg text-cape-storm font-semibold')}>{month}</Text>
      {data.map((item, index) => (
        <InfoPengisianText
          key={index}
          title={item.nama_spbu}
          date={handleDate(item.createdAt)}
          usage={item.kategori_pengisian}
          volume={item.jumlah.toString() + ' L'}
        />
      ))}
    </View>
  );
};

export default InfoPengisianBox;
