import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import VehicleCard from '../Card/VehicleCard';
import CardElevation from '../Card/CardElevation';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../navigator/Kendaraan/KendaraanNavigationProps';
import PersonSVG from '../../assets/person.svg';
import InfoBlockDisplay from '../Info/InfoBlockDisplay';
import TextColorBox from '../Box/TextColorBox';

interface Peminjam {
  nama: string;
  alamat: string;
  status: number;
  pengajuan: string;
}

interface Props {
  data: {
    kendaraan: string;
    mesin: string;
    pajak: number;
    peminjam: Peminjam[];
  }[];
  riwayat?: boolean;
}

const PinjamSTNKContent = ({ data, riwayat }: Props) => {
  const tw = useTailwind();
  const [selected, setSelected] = useState<number>(0);
  const navigation = useNavigation<KendaraanNavigationProps>();
  const [peminjam, setPeminjam] = useState<Peminjam[]>([]);

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

  useEffect(() => {
    const getPeminjam = (): Peminjam[] => {
      if (riwayat) {
        return data[selected].peminjam;
      } else {
        return data[selected].peminjam.filter((item) => item.status === 0);
      }
    };

    const peminjamData = getPeminjam();
    setPeminjam(peminjamData);
  }, [data, selected, riwayat]);

  return (
    <View>
      {/* list kendaraan start */}
      <ScrollView
        horizontal={true}
        style={{ maxHeight: 100 }}>
        <View style={[tw('flex flex-row mb-3'), { gap: 10 }]}>
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
      {peminjam.length > 0 ? (
        <View style={[tw('flex flex-col mb-10'), { gap: 13 }]}>
          {!riwayat && (
            <Text style={tw('font-semibold')}>Menunggu Persetujuan</Text>
          )}

          {/* card start */}
          {peminjam.map((item, index) => (
            <CardElevation
              onCardClick={() => {
                if (item.status == 0) {
                  navigation.navigate('ConfirmPinjamSTNK', {
                    nama: item.nama,
                    alamat: item.alamat,
                  });
                } else {
                  navigation.navigate('DetailRiwayatSTNK', {
                    nama: item.nama,
                    alamat: item.alamat,
                    status: item.status,
                    pengajuan: item.pengajuan,
                    mesin: data[selected].mesin,
                  });
                }
              }}
              key={index}
              cardStyle="py-3">
              <View style={[tw('flex flex-row px-3'), { gap: 15 }]}>
                <PersonSVG width={70} />
                <View style={[tw('flex flex-col'), { gap: 5, width: '73%' }]}>
                  {riwayat && (
                    <View style={tw('flex flex-row items-end justify-end')}>
                      <TextColorBox
                        title={handleStatus(item.status) ?? ''}
                        color={handleColor(item.status) ?? ''}
                      />
                    </View>
                  )}
                  <InfoBlockDisplay
                    title="Nama"
                    subTitle={item.nama}
                    titleStyle="text-xs text-disable"
                    subTitleStyle="text-sm text-cape-storm capitalize"
                    gap={2}
                  />
                  <InfoBlockDisplay
                    title={riwayat ? 'Pengajuan' : 'Alamat'}
                    subTitle={riwayat ? item.pengajuan : item.alamat}
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
    </View>
  );
};

export default PinjamSTNKContent;
