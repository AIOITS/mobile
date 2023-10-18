import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { MoneyNavigationProps } from '../../navigator/Money/MoneyNavigationProp';
import IconTextInputField from '../../components/Input/IconTextInputField';
import { Icon } from '@rneui/base';
import InfoPengisianBox from '../../components/Box/InfoPengisianBox';

const RiwayatSiMoney = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MoneyNavigationProps>();

  return (
    <BackgroundWithHeader
      header="Riwayat"
      subHeader="Riwayat Transaksi SI Money"
      bell
      backButton
      onBackClick={() => navigation.goBack()}
      main>
      {/* search start */}
      <IconTextInputField
        placeholderStyle="text-base"
        filter
        placeholder="Cari data">
        <Icon
          name={'search'}
          type="feather"
          size={25}
          color="gray"
        />
      </IconTextInputField>
      {/* search end */}

      {/* riwayat start */}
      <View
        style={[tw('flex flex-col items-start justify-center'), { gap: 5 }]}>
        <InfoPengisianBox
          month="Oktober"
          data={[
            {
              spbu: {
                name: 'SPBU Surabaya Soetomo',
              },
              createdAt: '10 Oktober 2022',
              jumlah: '-Rp70.000',
              kategori_pengisian: 'Beli BBM',
            },
            {
              spbu: {
                name: 'SPBU Surabaya Soetomo',
              },
              createdAt: '10 Oktober 2022',
              jumlah: '+Rp60.000',
              kategori_pengisian: 'top up',
            },
          ]}
        />
      </View>
      {/* riwayat end */}
    </BackgroundWithHeader>
  );
};

export default RiwayatSiMoney;
