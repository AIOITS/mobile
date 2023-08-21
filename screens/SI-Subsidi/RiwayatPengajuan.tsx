import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import { useNavigation } from '@react-navigation/native';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import CardElevation from '../../components/Card/CardElevation';

const data = [
  {
    tanggal: '11 Oktober 2022',
    jumlah: '3 L',
    status: 'diproses',
  },
  {
    tanggal: '7 Agustus 2022',
    jumlah: '3 L',
    status: 'ditolak',
  },
  {
    tanggal: '11 Juni 2022',
    jumlah: '3 L',
    status: 'disetujui',
  },
];

const RiwayatPengajuan = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();

  const color = (status: string): string => {
    if (status === 'diproses') {
      return 'bg-golden';
    } else if (status === 'disetujui') {
      return 'bg-light-green';
    } else {
      return 'bg-strong-pink';
    }
  };

  return (
    <BackgroundWithHeader
      header="Riwayat Pengajuan"
      subHeader="Pengajuan Subsidi yang telah dilakukan"
      backButton
      main
      onBackClick={() => navigation.goBack()}
      bell>
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        {data ? (
          data.map((item, index) => (
            <CardElevation
              onCardClick={() => navigation.navigate('DetailRiwayatPengajuan')}
              key={index}
              cardStyle="flex flex-row justify-between items-center p-3"
              elevation={2}>
              <View style={{ minWidth: 120 }}>
                <InfoBlockDisplay
                  gap={2}
                  title="Tanggal Pengajuan"
                  titleStyle="text-disable text-xs"
                  subTitle={item.tanggal}
                  subTitleStyle="text-cape-storm text-base font-semibold"
                />
              </View>
              <InfoBlockDisplay
                gap={2}
                title="Jumlah"
                titleStyle="text-disable text-xs"
                subTitle={item.jumlah}
                subTitleStyle="text-cape-storm text-base font-semibold"
              />
              <View style={tw(`rounded-md p-1 ${color(item.status)}`)}>
                <Text style={tw('text-xs text-white')}>{item.status}</Text>
              </View>
            </CardElevation>
          ))
        ) : (
          <Text>No data</Text>
        )}
      </View>
    </BackgroundWithHeader>
  );
};

export default RiwayatPengajuan;
