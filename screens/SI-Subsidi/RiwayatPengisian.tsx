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
  const [showStartPicker, setShowStartPicker] = useState<boolean>(false);
  const [showEndPicker, setShowEndPicker] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState<string>('');
  const [selectedEndDate, setSelectedEndDate] = useState<string>('');

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
      if (showStartPicker) {
        setSelectedStartDate(formattedDate);
      } else if (showEndPicker) {
        setSelectedEndDate(formattedDate);
      }
    }

    setShowStartPicker(false);
    setShowEndPicker(false);
  };

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
        value={search}
        onChangeValue={(e) => setSearch(e)}
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
            value={selectedStartDate}
            onChangeValue={(e) => setSelectedStartDate(e)}
            placeholder="Mulai">
            <Icon
              onPress={() => setShowStartPicker(!showStartPicker)}
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
            value={selectedEndDate}
            onChangeValue={(e) => setSelectedEndDate(e)}
            placeholder="Akhir">
            <Icon
              onPress={() => setShowEndPicker(!showEndPicker)}
              name="calendar-alt"
              type="font-awesome-5"
              size={20}
              color={'#00A0F3'}
            />
          </IconTextInputField>
        </View>
      </View>
      {(showStartPicker || showEndPicker) && (
        <View style={tw('absolute')}>
          <DateTimePicker
            onTouchCancel={() => {
              setShowStartPicker(false);
              setShowEndPicker(false);
            }}
            onTouchStart={() => {
              setShowStartPicker(false);
              setShowEndPicker(false);
            }}
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
        style={[
          tw('flex flex-col items-start justify-center mb-5'),
          { gap: 5 },
        ]}>
        {sortedMonths
          .filter((month) => {
            if (search == '') {
              return month;
            }

            if (month.toLowerCase().includes(search.toLowerCase())) {
              return month;
            }

            return month;
          })
          .map((item, index) => (
            <InfoPengisianBox
              key={index}
              dateStart={selectedStartDate}
              dateEnd={selectedEndDate}
              search={search}
              month={item}
              data={dataByMonth[item]}
            />
          ))}
        {params.history_pengisian.length == 0 && (
          <Text style={tw('text-center font-semibold text-sm text-cape-storm')}>
            Tidak ada riwayat pengisian
          </Text>
        )}
      </View>
      {/* riwayat end */}
    </BackgroundWithHeader>
  );
};

export default RiwayatPengisian;
