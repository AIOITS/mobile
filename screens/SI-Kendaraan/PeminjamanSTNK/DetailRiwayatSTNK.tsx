import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  DetailRiwayatSTNKRouteProp,
  KendaraanNavigationProps,
} from '../../../navigator/Kendaraan/KendaraanNavigationProps';
import PersonSVG from '../../../assets/person.svg';
import TextColorBox from '../../../components/Box/TextColorBox';
import InfoBlockDisplay from '../../../components/Info/InfoBlockDisplay';

const DetailRiwayatSTNK = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const {
    params: { alamat, mesin, nama, status, pengajuan },
  } = useRoute<DetailRiwayatSTNKRouteProp>();

  const handleStatus = (status: number) => {
    switch (status) {
      case 0:
        return 'Menunggu Persetujuan';
      case 1:
        return 'Disetujui';
      case 2:
        return 'Ditolak';
    }
  };

  const handleColor = (status: number) => {
    switch (status) {
      case 0:
        return 'bg-golden';
      case 1:
        return 'bg-light-green';
      case 2:
        return 'bg-strong-pink';
    }
  };

  return (
    <BackgroundWithHeader
      header="Pinjamkan STNK"
      subHeader="Konfirmasi peminjaman STNK"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <View style={tw('rounded-full flex-row flex items-start justify-center')}>
        <PersonSVG height={150} />
        <View style={tw('absolute right-0')}>
          <TextColorBox
            title={handleStatus(status) ?? ''}
            color={handleColor(status) ?? ''}
          />
        </View>
      </View>

      {/* detail start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <InfoBlockDisplay
          title="Nama"
          subTitle={nama}
          titleStyle="text-xs text-disable font-light"
          subTitleStyle="text-sm text-cape-storm font-semibold"
          gap={2}
        />
        <InfoBlockDisplay
          title="Alamat"
          subTitle={alamat}
          titleStyle="text-xs text-disable font-light"
          subTitleStyle="text-sm text-cape-storm font-semibold"
          gap={2}
        />
        <InfoBlockDisplay
          title="Kendaraan dipinjam"
          subTitle={mesin}
          titleStyle="text-xs text-disable font-light"
          subTitleStyle="text-sm text-cape-storm font-semibold"
          gap={2}
        />
        <View style={tw('flex flex-row justify-between items-center')}>
          <InfoBlockDisplay
            title="Waktu pengajuan"
            subTitle={pengajuan}
            titleStyle="text-xs text-disable font-light"
            subTitleStyle="text-sm text-cape-storm font-semibold"
            gap={2}
          />
          <InfoBlockDisplay
            title="Batas peminjaman"
            subTitle={pengajuan}
            titleStyle="text-xs text-disable font-light"
            subTitleStyle="text-sm text-cape-storm font-semibold"
            gap={2}
          />
        </View>
      </View>
      {/* detail end */}
    </BackgroundWithHeader>
  );
};

export default DetailRiwayatSTNK;
