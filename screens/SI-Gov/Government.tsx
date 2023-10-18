import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { GovNavigationProps } from '../../navigator/Gov/GovNavigationProp';
import {
  BarChart,
  LineChart,
  PieChart,
  StackedBarChart,
} from 'react-native-chart-kit';
import HeaderInfo from '../../components/Info/HeaderInfo';
import SumatraSVG from '../../assets/provinsi/sumatra.svg';
import JawaSVG from '../../assets/provinsi/jawa.svg';
import KalimantanSVG from '../../assets/provinsi/kalimantan.svg';
import SulawesiSVG from '../../assets/provinsi/sulawesi.svg';
import MalukuSVG from '../../assets/provinsi/maluku.svg';
import NusaTenggaraSVG from '../../assets/provinsi/nusa-tenggara.svg';
import PapuaSVG from '../../assets/provinsi/papua.svg';
import useHistoryPengisianByDate from '../../hooks/SI-Government/useHistoryPengisianByDate';
import calculate from '../../utils/calculationUtils';
import useJenisBahanBakar from '../../hooks/SI-Government/useJenisBahanBakar';

const Government = () => {
  const tw = useTailwind();
  const navigation = useNavigation<GovNavigationProps>();
  const provinsi = [
    'Sumatra',
    'Jawa',
    'Kalimantan',
    'Sulawesi',
    'Maluku',
    'Nusa Tenggara',
    'Papua',
  ];
  const provinsiSVG = [
    <SumatraSVG
      height={350}
      width={850}
    />,
    <JawaSVG
      height={350}
      width={850}
    />,
    <KalimantanSVG
      height={350}
      width={850}
    />,
    <SulawesiSVG
      height={350}
      width={850}
    />,
    <MalukuSVG
      height={350}
      width={850}
    />,
    <NusaTenggaraSVG
      height={350}
      width={850}
    />,
    <PapuaSVG
      height={350}
      width={850}
    />,
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };

  const colors_pallete = [
    (opacity = 1) => `rgba(249, 65, 68, ${opacity})`,
    (opacity = 1) => `rgba(243, 114, 44, ${opacity})`,
    (opacity = 1) => `rgba(248, 150, 30, ${opacity})`,
    (opacity = 1) => `rgba(249, 199, 79, ${opacity})`,
    (opacity = 1) => `rgba(144, 190, 109, ${opacity})`,
    (opacity = 1) => `rgba(45, 156, 219, ${opacity})`,
  ];

  const labels_name = ['Subsidi', 'Non Subsidi'];

  const {
    loading: loadingHistoryPengisian,
    error: errorHistoryPengisian,
    historyPengisianByDate,
  } = useHistoryPengisianByDate();

  const {
    loading: loadingBahanBakar,
    error: errorBahanBakar,
    jenisBahanBakar,
  } = useJenisBahanBakar();

  return (
    <BackgroundWithHeader
      main
      backButton
      onBackClick={() => navigation.goBack()}
      header="SI Government"
      loading={loadingHistoryPengisian || loadingBahanBakar}
      subHeader="Sistem pengelolaan data terintegrasi oleh Pemerintah"
      bell>
      {/* penggunaan subsidi start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <HeaderInfo title="Penggunaan Subsidi BBM (KL)" />
        {/* chart start */}
        <BarChart
          withVerticalLabels={false}
          data={{
            labels: [...jenisBahanBakar.name],
            datasets: [
              {
                data: [...jenisBahanBakar.jumlah],
                colors: colors_pallete,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 0,
                withDots: false,
              },
            ],
          }}
          // verticalLabelRotation={-50}
          yAxisLabel=""
          yAxisSuffix=""
          // showValuesOnTopOfBars={true}
          fromZero={true}
          flatColor
          showBarTops={false}
          xLabelsOffset={15}
          // withInnerLines={true}
          withCustomBarColorFromData={true}
          width={Dimensions.get('window').width - 30}
          height={220}
          chartConfig={{
            backgroundColor: '#f6f9ff',
            backgroundGradientFrom: 'rgba(255, 255, 255, 1)',
            backgroundGradientTo: 'rgba(255, 255, 255, 1)',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 0,
            },
          }}
        />
        {/* chart end */}
        <View
          style={[
            tw('flex flex-row flex-wrap justify-start items-center'),
            { gap: 5 },
          ]}>
          {jenisBahanBakar.name.map((item, index) => (
            <View
              key={index}
              style={[
                tw('flex flex-row justify-start items-center'),
                { minWidth: 150 },
              ]}>
              <View
                style={[
                  tw('w-4 h-4 rounded-full mr-2'),
                  { backgroundColor: colors_pallete[index](1) },
                ]}
              />
              <Text style={tw('text-cape-storm font-semibold text-sm')}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {/* penggunaan subsidi end */}

      {/* perbandingan pembelian bbm start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <HeaderInfo title="Perbandingan Pembelian BBM" />
        {/* chart start */}
        <PieChart
          data={[
            {
              name: labels_name[0],
              jumlah: calculate(...historyPengisianByDate.subsidi),
              color: '#f94144',
            },
            {
              name: labels_name[1],
              jumlah: calculate(...historyPengisianByDate.non_subsidi),
              color: '#f3722c',
            },
          ]}
          width={Dimensions.get('window').width - 30}
          height={220}
          chartConfig={{
            backgroundColor: '#f6f9ff',
            backgroundGradientFrom: 'rgba(255, 255, 255, 1)',
            backgroundGradientTo: 'rgba(255, 255, 255, 1)',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          hasLegend={false}
          center={[(Dimensions.get('window').width - 30) / 4, 0]}
          accessor="jumlah"
          backgroundColor="transparent"
          paddingLeft="15"
        />
        {/* chart end */}
        <View
          style={[
            tw('flex flex-row flex-wrap justify-start items-center'),
            { gap: 5 },
          ]}>
          {labels_name.map((item, index) => (
            <View
              key={index}
              style={[
                tw('flex flex-row justify-start items-center'),
                { minWidth: 150 },
              ]}>
              <View
                style={[
                  tw('w-4 h-4 rounded-full mr-2'),
                  { backgroundColor: colors_pallete[index](1) },
                ]}
              />
              <Text style={tw('text-cape-storm font-semibold text-sm')}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {/* perbandingan pembelian bbm end */}

      {/* penggunaan subsidi start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <HeaderInfo title="Penggunaan Subsidi BBM (KL)" />
        {/* chart start */}
        <LineChart
          data={{
            labels: [...historyPengisianByDate.labels],
            datasets: [
              {
                data: [...historyPengisianByDate.subsidi],
                strokeWidth: 4,
                color: (opacity = 1) => `rgba(60, 72, 86, ${opacity})`,
              },
              {
                data: [...historyPengisianByDate.non_subsidi],
                strokeWidth: 4,
                color: (opacity = 1) => `rgba(60, 72, 86, ${opacity})`,
              },
            ],
          }}
          withShadow={false}
          fromZero={true}
          withDots={false}
          width={Dimensions.get('window').width - 30}
          verticalLabelRotation={-65}
          height={220}
          chartConfig={{
            backgroundColor: '#f6f9ff',
            backgroundGradientFrom: 'rgba(255, 255, 255, 1)',
            backgroundGradientTo: 'rgba(255, 255, 255, 1)',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            linejoinType: 'miter',
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        {/* chart end */}
      </View>
      {/* penggunaan subsidi end */}

      {/* kuota bbm start */}
      <View style={[tw('flex flex-col mb-10'), { gap: 10 }]}>
        <Text style={tw('text-cape-storm font-semibold text-sm')}>
          Persebaran Kuota BBM di Indonesia
        </Text>
        <View style={[tw('flex flex-row flex-wrap'), { gap: 10 }]}>
          {provinsi.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemClick(index)}>
              <Text
                style={[
                  tw('p-2 rounded-md font-semibold text-sm'),
                  selectedItemIndex === index
                    ? tw('bg-primary-light-blue text-white')
                    : tw('text-cape-storm'),
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView horizontal>
          {provinsiSVG[selectedItemIndex ? selectedItemIndex : 0]}
        </ScrollView>
      </View>
      {/* kuota bbm end */}
    </BackgroundWithHeader>
  );
};

export default Government;
