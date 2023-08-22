import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../navigator/Kendaraan/KendaraanNavigationProps';
import SimCardSVG from '../../assets/kartu/sim-card-small.svg';
import STNKSVG from '../../assets/kartu/stnk.svg';
import CardElevation from '../../components/Card/CardElevation';
import NewCard from '../../components/Card/NewCard';

const Kendaraan = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();

  return (
    <BackgroundWithHeader
      header="SI Kendaraan"
      subHeader="Surat kendaraan digital"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <View style={tw('items-end justify-end')}>
        <TouchableOpacity
          style={[
            tw(
              'flex flex-row items-center justify-center rounded-lg py-3 bg-primary-light-blue',
            ),
            { width: '50%', gap: 10 },
          ]}>
          <Text style={tw('text-white font-semibold text-sm')}>Pinjamkan</Text>
          <SimCardSVG width={20} />
        </TouchableOpacity>
      </View>
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <CardElevation onCardClick={() => navigation.navigate('DetailSTNK')}>
          <STNKSVG width={'100%'} />
        </CardElevation>
        <NewCard
          onCardClick={() => navigation.navigate('TambahSTNK')}
          title="Tambah STNK Sementara"
          height={170}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default Kendaraan;
