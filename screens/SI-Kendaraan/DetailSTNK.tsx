import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import TableField from '../../components/Table/TableField';
import { Divider } from '@rneui/themed';
import ButtonOutlineComponent from '../../components/Button/ButtonOutlineComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  DetailSTNKRouteProp,
  KendaraanNavigationProps,
} from '../../navigator/Kendaraan/KendaraanNavigationProps';
import handleDate from '../../utils/convertDate';

const DetailSTNK = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const {
    params: {
      nama_pemilik,
      berlaku,
      nomor_mesin,
      tipe,
      merk,
      nomor_rangka,
      jenis,
      model,
      tahun_pembuatan,
      isi_silinder,
      warna,
      bahan_bakar,
      warna_tnkb,
      tahun_registrasi,
      nomor_bpkb,
      kode_lokasi,
      nomor_urut_pendaftaran,
      pkb,
    },
  } = useRoute<DetailSTNKRouteProp>();

  return (
    <BackgroundWithHeader
      header={nomor_mesin}
      subHeader={`${tipe} ${merk} ${nomor_rangka}`}
      backButton
      main
      bell>
      <View
        style={tw(
          'items-center justify-center bg-primary-light-blue rounded-lg py-2',
        )}>
        <InfoBlockDisplay
          title="Nama Pemilik"
          titleStyle="text-xs text-center text-white font-light"
          subTitle={nama_pemilik}
          subTitleStyle="text-center text-lg text-white"
        />
      </View>
      <View style={[tw('flex flex-row justify-between')]}>
        <InfoBlockDisplay
          title="Berlaku sampai"
          subTitle={handleDate(berlaku)}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-golden text-base"
        />
        <View
          style={[
            tw(
              'flex bg-golden flex-col items-start justify-center rounded-md px-4 py-2',
            ),
          ]}>
          <InfoBlockDisplay
            title="Status Pajak"
            subTitle={pkb.status_pajak ? 'Lunas' : 'Belum Lunas'}
            titleStyle="text-white text-xs"
            subTitleStyle="text-white text-base"
          />
        </View>
      </View>

      {/* table start */}
      <TableField pkb={pkb} />
      {/* table end */}

      {/* detail start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <InfoBlockDisplay
          title="Merk"
          subTitle={merk}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm uppercase text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Type"
          subTitle={tipe}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm uppercase text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Jenis"
          subTitle={jenis}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Model"
          subTitle={model}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Tahun Pembuatan"
          subTitle={tahun_pembuatan}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Isi Silinder"
          subTitle={isi_silinder}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Nomor Rangka/NIK/VIN"
          subTitle={nomor_rangka}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Nomor Mesin"
          subTitle={nomor_mesin}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Warna"
          subTitle={warna}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Bahan Bakar"
          subTitle={bahan_bakar}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Warna TNKB"
          subTitle={warna_tnkb}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Tahun Registrasi"
          subTitle={tahun_registrasi}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Nomor BPKB"
          subTitle={nomor_bpkb}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Kode Lokasi"
          subTitle={kode_lokasi}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="No. Urut Pendaftaran"
          subTitle={nomor_urut_pendaftaran}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
      </View>
      {/* detail end */}

      {/* button start */}
      <View style={[tw('flex flex-row justify-between mb-5')]}>
        <View style={{ width: '48%' }}>
          <ButtonOutlineComponent
            buttonTitle="Ganti Plat"
            height={'py-2'}
            onNavigationClick={() =>
              navigation.navigate('MetodeBayarGantiPlat')
            }
          />
        </View>
        <View style={{ width: '48%' }}>
          <ButtonComponent
            buttonTitle="Bayar Pajak"
            height={'py-2.5'}
            onNavigationClick={() =>
              navigation.navigate('MetodePembayaranPajak')
            }
          />
        </View>
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default DetailSTNK;
