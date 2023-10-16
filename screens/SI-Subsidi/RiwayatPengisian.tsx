import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  RiwayatPengisianRouteProp,
  SubsidiNavigationProps,
} from '../../navigator/Subsidi/SubsidiNavigationProps';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import TextInputField from '../../components/Input/TextInputField';
import { Icon } from '@rneui/themed';
import InfoPengisianBox from '../../components/Box/InfoPengisianBox';
import IconTextInputField from '../../components/Input/IconTextInputField';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

const RiwayatPengisian = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();
  const [search, setSearch] = useState<string>('');
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');

  const { params } = useRoute<RiwayatPengisianRouteProp>();

  let calculate = params.history_pengisian.reduce((a, b) => {
    return a + b.jumlah;
  }, 0);

  const onDateChange = (event: DateTimePickerEvent) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;

    if (type === 'set' && timestamp !== undefined) {
      const selected = new Date(timestamp);
      const formattedDate = format(selected, 'dd/MM/yyyy');
      setSelectedDate(formattedDate);
    }

    setShowPicker(false);
  };

  // Group the data by month
  const dataByMonth: { [key: string]: HistoryPengisian[] } =
    params.history_pengisian.reduce((acc, item) => {
      const createdAt = new Date(item.createdAt);
      const month = createdAt.toLocaleString('default', { month: 'long' });

      if (!acc[month]) {
        acc[month] = [];
      }

      acc[month].push(item);
      return acc;
    }, {});

  // Sort the months based on their order
  const monthMap: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const sortedMonths: string[] = Object.keys(dataByMonth).sort(
    (a, b) => monthMap.indexOf(b) - monthMap.indexOf(a),
  );

  return (
    <BackgroundWithHeader
      header="Riwayat Pengisian"
      backButton
      onBackClick={() => navigation.goBack()}
      bell
      main
      subHeader="Riwayat Pengisian BBM">
      {/* info start */}
      <View style={tw('flex flex-row justify-between items-center')}>
        <InfoBlockDisplay
          title={`${params.merk} ${params.model}`}
          subTitle={params.nomor_polisi}
          gap={2}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-cape-storm font-bold text-xl"
        />
        <InfoBlockDisplay
          title="Penggunaan Subsidi"
          subTitle={calculate.toFixed(2) + ' L'}
          gap={2}
          titleStyle="text-right text-disable text-xs"
          subTitleStyle="text-right text-cape-storm font-bold text-xl"
        />
      </View>
      {/* info end */}

      {/* search start */}
      <IconTextInputField
        placeholderStyle="text-base"
        placeholder="Cari data pengisian">
        <Icon
          name={'search'}
          type="feather"
          size={25}
          color="gray"
        />
      </IconTextInputField>
      {/* search end */}

      {/* date start */}
      <View
        style={[tw('flex flex-row items-start justify-between'), { gap: 5 }]}>
        <View style={[{ width: '48%' }]}>
          <IconTextInputField
            right
            placeholder="Mulai">
            <Icon
              onPress={() => setShowPicker(!showPicker)}
              name="calendar-alt"
              type="font-awesome-5"
              size={20}
              color={'#00A0F3'}
            />
          </IconTextInputField>
        </View>
        <View style={[{ width: '48%' }]}>
          <IconTextInputField
            right
            placeholder="Akhir">
            <Icon
              onPress={() => setShowPicker(!showPicker)}
              name="calendar-alt"
              type="font-awesome-5"
              size={20}
              color={'#00A0F3'}
            />
          </IconTextInputField>
        </View>
      </View>
      {showPicker && (
        <View style={tw('absolute')}>
          <DateTimePicker
            onTouchCancel={() => setShowPicker(false)}
            onTouchStart={() => setShowPicker(false)}
            mode="date"
            display="calendar"
            value={date}
            onChange={(event) => onDateChange(event)}
          />
        </View>
      )}
      {/* date end */}

      {/* riwayat start */}
      <View
        style={[tw('flex flex-col items-start justify-center'), { gap: 5 }]}>
        {sortedMonths.map((month) => (
          <InfoPengisianBox
            key={month}
            month={month}
            data={dataByMonth[month]}
          />
        ))}
      </View>
      {/* riwayat end */}
    </BackgroundWithHeader>
  );
};

export default RiwayatPengisian;
