import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { IdentitasNavigationProps } from '../../navigator/Identitas/IdentitasNavigationProps';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import PersonSVG from '../../assets/person.svg';
import { Divider } from '@rneui/themed';
import ButtonBlueComponent from '../../components/Button/ButtonBlueComponent';

const data = {
  tgl_berlaku: '21 Januari 2024',
  nomor_sim: 'C - 3274-7707-000031',
  nama: 'Tiara Asa',
  tempat_tgl_lahir: 'Kendari, 01-07-1977',
  gol_darah: 'A',
  jenis_kelamin: 'Wanita',
  alamat: 'JL. LAUTE II NO. 92 MANDALOKA KENDARI',
  pekerjaan: 'pegawai negeri',
  polres: 'metro jaya',
};

const DetailSim = () => {
  const tw = useTailwind();
  const navigation = useNavigation<IdentitasNavigationProps>();

  return (
    <BackgroundWithHeader
      main
      backButton
      onBackClick={() => navigation.goBack()}
      header="Si Identitas"
      subHeader="Smart SIM Identitas"
      bell>
      <View
        style={[
          tw('flex flex-col justify-center items-start mb-20'),
          { gap: 5 },
        ]}>
        <InfoBlockDisplay
          title="Berlaku Hingga"
          titleStyle="text-xs text-disable"
          subTitle={data.tgl_berlaku}
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <PersonSVG
          height={100}
          style={tw('self-center flex-1')}
        />
        <View style={tw('self-center flex-1')}>
          <InfoBlockDisplay
            title="Nomor SIM"
            titleStyle="text-xs text-disable text-center"
            subTitle={data.nomor_sim}
            subTitleStyle="text-sm text-cape-storm text-center"
            gap={2}
          />
        </View>
        <InfoBlockDisplay
          title="Nama Lengkap"
          titleStyle="text-xs text-disable"
          subTitle={data.nama}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Tempat, Tanggal Lahir"
          titleStyle="text-xs text-disable"
          subTitle={data.tempat_tgl_lahir}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Golongan Darah"
          titleStyle="text-xs text-disable"
          subTitle={data.gol_darah}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Jenis Kelamin"
          titleStyle="text-xs text-disable"
          subTitle={data.jenis_kelamin}
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Alamat"
          titleStyle="text-xs text-disable"
          subTitle={data.alamat}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Pekerjaan"
          titleStyle="text-xs text-disable"
          subTitle={data.pekerjaan}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Polres"
          titleStyle="text-xs text-disable"
          subTitle={data.polres}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        {/* <View style={tw('absolute bottom-0 right-0 left-0 z-10')}>
          <ButtonBlueComponent
            buttonTitle="Perpanjang SIM"
            onNavigationClick={() => navigation.navigate('DetailSim')}
          />
        </View> */}
      </View>
    </BackgroundWithHeader>
  );
};

export default DetailSim;
