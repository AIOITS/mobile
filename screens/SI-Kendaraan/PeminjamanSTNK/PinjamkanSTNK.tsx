import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../../navigator/Kendaraan/KendaraanNavigationProps';
import HistorySVG from '../../../assets/kartu/history.svg';
import ButtonBlueWithIcon from '../../../components/Button/ButtonBlueWithIcon';
import PinjamSTNKContent from '../../../components/Kendaraan/PinjamSTNKContent';

const data = [
  {
    kendaraan: 'Honda Vario 125',
    mesin: 'L 1150 C',
    pajak: 1,
    peminjam: [
      {
        nama: 'nurul sofia',
        alamat:
          'Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111',
        status: 0,
        pengajuan: '08:00 11 Oktober 2022',
      },
      {
        nama: 'Fernando Sibarani',
        alamat:
          'Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111',
        status: 0,
        pengajuan: '08:00 11 Oktober 2022',
      },
      {
        nama: 'Fernando Sibarani',
        alamat:
          'Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111',
        status: 1,
        pengajuan: '08:00 11 Oktober 2022',
      },
      {
        nama: 'Fernando Sibarani',
        alamat:
          'Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111',
        status: 2,
        pengajuan: '08:00 11 Oktober 2022',
      },
    ],
  },
  {
    kendaraan: 'Honda supra',
    mesin: 'L 1490 C',
    pajak: 1,
    peminjam: [],
  },
];

const PinjamkanSTNK = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const [selected, setSelected] = useState<number>(0);

  return (
    <BackgroundWithHeader
      header="Pinjamkan STNK"
      subHeader="Konfirmasi peminjaman STNK"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      {/* riwayat button start */}
      <View style={tw('items-end justify-end')}>
        <ButtonBlueWithIcon
          onNavigationClick={() => navigation.navigate('RiwayatPinjamSTNK')}
          titleButton="Riwayat"
          width={'50%'}>
          <HistorySVG width={20} />
        </ButtonBlueWithIcon>
      </View>
      {/* riwayat button end */}

      <PinjamSTNKContent data={data} />
    </BackgroundWithHeader>
  );
};

export default PinjamkanSTNK;
