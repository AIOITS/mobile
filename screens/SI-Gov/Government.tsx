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
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import HeaderInfo from '../../components/Info/HeaderInfo';
import SumatraSVG from '../../assets/provinsi/sumatra.svg';
import JawaSVG from '../../assets/provinsi/jawa.svg';
import KalimantanSVG from '../../assets/provinsi/kalimantan.svg';
import SulawesiSVG from '../../assets/provinsi/sulawesi.svg';
import MalukuSVG from '../../assets/provinsi/maluku.svg';
import NusaTenggaraSVG from '../../assets/provinsi/nusa-tenggara.svg';
import PapuaSVG from '../../assets/provinsi/papua.svg';

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

  return (
    <BackgroundWithHeader
      main
      backButton
      onBackClick={() => navigation.goBack()}
      header="SI Government"
      subHeader="Sistem pengelolaan data terintegrasi oleh Pemerintah"
      bell>
      {/* penggunaan subsidi start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <HeaderInfo title="Penggunaan Subsidi BBM (KL)" />
        {/* chart start */}
        <BarChart
          withVerticalLabels={false}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [79, 80, 80, 80, 80, 80],
                colors: [
                  (opacity = 1) => `rgba(249, 65, 68, ${opacity})`, // Color for January
                  (opacity = 1) => `rgba(243, 114, 44, ${opacity})`, // Color for February
                  (opacity = 1) => `rgba(248, 150, 30, ${opacity})`, // Color for March
                  (opacity = 1) => `rgba(249, 199, 79, ${opacity})`, // Color for April
                  (opacity = 1) => `rgba(144, 190, 109, ${opacity})`, // Color for May
                  (opacity = 1) => `rgba(45, 156, 219, ${opacity})`, // Color for June
                ],
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 0, // optional, default 3
                withDots: false,
              },
            ],
          }}
          fromZero={true}
          flatColor
          showBarTops={false}
          withInnerLines={true}
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
      </View>
      {/* penggunaan subsidi end */}

      {/* perbandingan pembelian bbm start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <HeaderInfo title="Perbandingan Pembelian BBM" />
        {/* chart start */}
        <PieChart
          data={[
            {
              name: 'Seoul',
              population: 63,
              color: '#f94144',
            },
            {
              name: 'Toronto',
              population: 37,
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
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
        {/* chart end */}
      </View>
      {/* perbandingan pembelian bbm end */}

      {/* penggunaan subsidi start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <HeaderInfo title="Penggunaan Subsidi BBM (KL)" />
        {/* chart start */}
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 4,
                color: (opacity = 1) => `rgba(60, 72, 86, ${opacity})`,
              },
            ],
          }}
          withShadow={false}
          fromZero={true}
          withDots={false}
          width={Dimensions.get('window').width - 30}
          verticalLabelRotation={-45}
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
