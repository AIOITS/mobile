import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import PersonSVG from '../../assets/person.svg';
import { Divider } from '@rneui/themed';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { PerpanjangSIMNavigationProp } from '../../navigator/Identitas/PerpanjangSIMNavigationProp';
import { DetailSIMRouteProp } from '../../navigator/Identitas/IdentitasNavigationProps';
import handleDate from '../../utils/convertDate';

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
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const {
    params: {
      sim: {
        uid,
        nomor_sim,
        jenis_sim,
        nama,
        alamat,
        rt,
        rw,
        kelurahan_desa,
        kecamatan,
        kabupaten,
        pekerjaan,
        kabupaten_terbit,
        tanggal_terbit,
        penerbit,
        berlaku_sampai,
      },
      ktp: { golongan_darah, tanggal_lahir, tempat_lahir, jenis_kelamin },
    },
  } = useRoute<DetailSIMRouteProp>();

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
          tw('flex flex-col justify-center items-start mb-5'),
          { gap: 5 },
        ]}>
        <InfoBlockDisplay
          title="Berlaku Hingga"
          titleStyle="text-xs text-disable"
          subTitle={handleDate(berlaku_sampai)}
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
            subTitle={nomor_sim}
            subTitleStyle="text-sm text-cape-storm text-center"
            gap={2}
          />
        </View>
        <InfoBlockDisplay
          title="Nama Lengkap"
          titleStyle="text-xs text-disable"
          subTitle={nama}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Tempat, Tanggal Lahir"
          titleStyle="text-xs text-disable"
          subTitle={`${tempat_lahir}, ${handleDate(tanggal_lahir)}`}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Golongan Darah"
          titleStyle="text-xs text-disable"
          subTitle={golongan_darah}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        {/* TODO: jenis kelamin belum ditambahkan pada be */}
        <InfoBlockDisplay
          title="Jenis Kelamin"
          titleStyle="text-xs text-disable"
          subTitle={jenis_kelamin}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Alamat"
          titleStyle="text-xs text-disable"
          subTitle={`${alamat} RT ${rt} RW ${rw} Kel. ${kelurahan_desa} Kec. ${kecamatan} Kab. ${kabupaten}`}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Pekerjaan"
          titleStyle="text-xs text-disable"
          subTitle={pekerjaan}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Polres"
          titleStyle="text-xs text-disable"
          subTitle={penerbit}
          subTitleStyle="text-sm text-cape-storm uppercase"
          gap={2}
        />
        <View style={tw('bottom-3 right-0 left-0 w-full mt-5')}>
          <ButtonComponent
            buttonTitle="Perpanjang SIM"
            onNavigationClick={() =>
              navigation.navigate('MetodePembayaranPerpanjangSIM')
            }
          />
        </View>
      </View>
    </BackgroundWithHeader>
  );
};

export default DetailSim;
