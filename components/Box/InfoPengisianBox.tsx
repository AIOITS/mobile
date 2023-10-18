import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoPengisianText from '../Info/InfoPengisianText';
import handleDate from '../../utils/convertDate';

interface Props {
  month: string;
  data: HistoryPengisian[] | HistoryEmoney[];
  search: string;
  dateStart: string;
  dateEnd: string;
}

const InfoPengisianBox = ({
  month,
  data,
  search = '',
  dateStart = '',
  dateEnd = '',
}: Props) => {
  const tw = useTailwind();

  return (
    <View style={[[tw('flex flex-col items-start justify-start'), { gap: 5 }]]}>
      <Text style={tw('text-lg text-cape-storm font-semibold')}>{month}</Text>
      {data
        .filter((item) => {
          if (dateStart != '' && dateEnd != '') {
            const [dayStart, monthStart, yearStart] = dateStart
              .split('/')
              .map(Number);
            const startDate = new Date(yearStart, monthStart - 1, dayStart);
            const [dayEnd, monthEnd, yearEnd] = dateEnd.split('/').map(Number);
            const endDate = new Date(yearEnd, monthEnd - 1, dayEnd);
            const currentDate = new Date(item.createdAt);

            if (currentDate >= startDate && currentDate <= endDate) {
              return true;
            } else {
              return false;
            }
          }

          if (search == '') {
            return true;
          }

          if (item.spbu.name.toLowerCase().includes(search.toLowerCase())) {
            return true;
          }

          if (item.jumlah.toString().includes(search)) {
            return true;
          }

          if (search == 'Subsidi') {
            if (item.kategori_pengisian == 'subsidi') {
              return true;
            }
          } else if (search == 'Non Subsidi') {
            if (item.kategori_pengisian == 'non_subsidi') {
              return true;
            }
          }

          return false;
        })
        .map((item, index) => (
          <InfoPengisianText
            key={index}
            title={item.spbu.name}
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
