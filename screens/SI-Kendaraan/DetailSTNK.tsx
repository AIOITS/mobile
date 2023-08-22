import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import TableField from '../../components/Table/TableField';
import { Divider } from '@rneui/themed';
import ButtonOutlineComponent from '../../components/Button/ButtonOutlineComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../navigator/Kendaraan/KendaraanNavigationProps';

const DetailSTNK = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  return (
    <BackgroundWithHeader
      header="L 1150 CC"
      subHeader="Honda Vario 150"
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
          subTitle="Tiara Asa"
          subTitleStyle="text-center text-lg text-white"
        />
      </View>
      <View style={[tw('flex flex-row justify-between')]}>
        <InfoBlockDisplay
          title="Berlaku sampai"
          subTitle="25 Agustus 2023"
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
            subTitle="Belum Lunas"
            titleStyle="text-white text-xs"
            subTitleStyle="text-white text-base"
          />
        </View>
      </View>

      {/* table start */}
      <TableField />
      {/* table end */}

      {/* detail start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <InfoBlockDisplay
          title="Merk"
          subTitle="honda"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm uppercase text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Type"
          subTitle="Vario 125"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm uppercase text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Jenis"
          subTitle="Sepeda Motor"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Model"
          subTitle="S.MTR/Scooter"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Tahun Pembuatan"
          subTitle="2017"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Isi Silinder"
          subTitle="00800"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Nomor Rangka/NIK/VIN"
          subTitle="MF3VRO1SCHL000002"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Nomor Mesin"
          subTitle="VR001FMG17000001"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Warna"
          subTitle="Abu-Abu"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Bahan Bakar"
          subTitle="Bensin"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Warna TNKB"
          subTitle="Hitam"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Tahun Registrasi"
          subTitle="2017"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Nomor BPKB"
          subTitle="NO1887457"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="Kode Lokasi"
          subTitle="9D754828885SN"
          titleStyle="text-disable text-xs"
          subTitleStyle="text-sm text-cape-storm"
          gap={2}
        />
        <Divider color="gray" />
        <InfoBlockDisplay
          title="No. Urut Pendaftaran"
          subTitle="0003/U52/25U41/"
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
            onNavigationClick={() => navigation.navigate('GantiPlat')}
          />
        </View>
        <View style={{ width: '48%' }}>
          <ButtonComponent
            buttonTitle="Bayar Pajak"
            height={'py-2.5'}
            onNavigationClick={() => navigation.navigate('BayarPajak')}
          />
        </View>
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default DetailSTNK;
