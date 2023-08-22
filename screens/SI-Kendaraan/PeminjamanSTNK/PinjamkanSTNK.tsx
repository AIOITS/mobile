import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../../navigator/Kendaraan/KendaraanNavigationProps';
import HistorySVG from '../../../assets/kartu/history.svg';
import ButtonBlueWithIcon from '../../../components/Button/ButtonBlueWithIcon';
import VehicleCard from '../../../components/Card/VehicleCard';
import CardElevation from '../../../components/Card/CardElevation';
import PersonSVG from '../../../assets/person.svg';
import InfoBlockDisplay from '../../../components/Info/InfoBlockDisplay';

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
      },
      {
        nama: 'Fernando Sibarani',
        alamat:
          'Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111',
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

      {/* list kendaraan start */}
      <ScrollView
        horizontal={true}
        style={{ maxHeight: 100 }}>
        <View style={[tw('flex flex-row'), { gap: 10 }]}>
          {data.map((item, index) => (
            <VehicleCard
              key={index}
              selected={selected === index}
              onSelected={() => setSelected(index)}
              vehicleName={item.kendaraan}
              engineSpec={item.mesin}
              reminderTitle="Status Pajak"
              reminderDate={item.pajak ? 'Lunas' : 'Belum Lunas'}
            />
          ))}
        </View>
      </ScrollView>
      {/* list kendaraan end */}

      {/* list peminjam start */}
      {data[selected].peminjam.length > 0 ? (
        <View style={[tw('flex flex-col mb-10'), { gap: 13 }]}>
          <Text style={tw('font-semibold')}>Menunggu Persetujuan</Text>

          {/* card start */}
          {data[selected].peminjam.map((peminjam, index) => (
            <CardElevation
              onCardClick={() =>
                navigation.navigate('ConfirmPinjamSTNK', {
                  nama: peminjam.nama,
                  alamat: peminjam.alamat,
                })
              }
              key={index}
              cardStyle="py-3">
              <View style={[tw('flex flex-row px-3'), { gap: 15 }]}>
                <PersonSVG width={70} />
                <View
                  style={[
                    tw('flex flex-col w-fit'),
                    { gap: 5, maxWidth: '75%' },
                  ]}>
                  <InfoBlockDisplay
                    title="Nama"
                    subTitle={peminjam.nama}
                    titleStyle="text-xs text-disable"
                    subTitleStyle="text-sm text-cape-storm capitalize"
                    gap={2}
                  />
                  <InfoBlockDisplay
                    title="Alamat"
                    subTitle={peminjam.alamat}
                    titleStyle="text-xs text-disable"
                    subTitleStyle="text-sm text-cape-storm capitalize max-w-full"
                    gap={2}
                  />
                </View>
              </View>
            </CardElevation>
          ))}
          {/* card end */}
        </View>
      ) : (
        <Text style={tw('text-center text-disable font-bold')}>
          Belum ada yang melakukan peminjaman pada kendaraan ini
        </Text>
      )}
      {/* list peminjam end */}
    </BackgroundWithHeader>
  );
};

export default PinjamkanSTNK;
