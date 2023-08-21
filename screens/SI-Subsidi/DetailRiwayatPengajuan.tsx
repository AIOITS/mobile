import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import { useNavigation } from '@react-navigation/native';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import ButtonIcon from '../../components/Button/ButtonIcon';
import { Icon } from '@rneui/themed';

const DetailRiwayatPengajuan = () => {
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
      <View style={[tw('flex flex-col'), { gap: 14 }]}>
        {/* status start */}
        <View style={tw('flex flex-row justify-between items-center')}>
          <Text style={tw('text-lg text-cape-storm font-bold')}>
            Data Ajuan
          </Text>
          <Text style={tw('bg-golden text-white text-sm rounded-md p-1')}>
            Diproses
          </Text>
        </View>
        {/* status end */}

        {/* jum subsidi start */}
        <InfoBlockDisplay
          title="Jumlah Subsidi"
          titleStyle="text-disable text-xs"
          subTitle="3 Liter"
          subTitleStyle="text-cape-storm font-normal text-sm"
          gap={3}
        />
        {/* jum subsidi end */}

        {/* alasan start */}
        <InfoBlockDisplay
          title="Alasan"
          titleStyle="text-disable text-xs"
          subTitle="Saya bekerja sebagai driver ojol di Surabaya. Bulan ini orderan
          bertambah sehingga subsidi bahan bakar lebih cepat habis dan
          ditambah lagi kenaikan harga BBM yang belum diimbangi dengan
          kenaikan harga orderan membuat saya membutuhkan subsidi tambahan"
          subTitleStyle="text-cape-storm font-normal text-sm"
          gap={3}
        />
        {/* alasan end */}

        {/* dokumen start */}
        <View style={[tw('flex flex-col'), { gap: 8 }]}>
          <Text style={tw('text-disable text-xs')}>Dokumen pendukung</Text>
          <ButtonIcon titleButton="screenshot_profile_ojol.png">
            <Icon
              name={'picture-o'}
              type="font-awesome"
              size={25}
              color="#00A0F3"
            />
          </ButtonIcon>
          <ButtonIcon titleButton="surat_keterangan_kerja.pdf">
            <Icon
              name={'file-pdf-o'}
              type="font-awesome"
              size={25}
              color="#00A0F3"
            />
          </ButtonIcon>
        </View>
        {/* dokumen end */}
      </View>
    </BackgroundWithHeader>
  );
};

export default DetailRiwayatPengajuan;
