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
import ButtonBlueWithIcon from '../../components/Button/ButtonBlueWithIcon';
import useSTNKandPKB from '../../hooks/SI-Kendaraan/useSTNKandPKB';
import { useAuthContext } from '../../contexts/Auth/AuthContext';

const Kendaraan = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const id = useAuthContext().user?.id;
  const { loading, error, stnk_pkb } = useSTNKandPKB(id);

  return (
    <BackgroundWithHeader
      header="SI Kendaraan"
      subHeader="Surat kendaraan digital"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <View style={tw('items-end justify-end')}>
        <ButtonBlueWithIcon
          onNavigationClick={() => navigation.navigate('PinjamkanSTNK')}
          titleButton="Pinjamkan"
          width={'50%'}>
          <SimCardSVG width={20} />
        </ButtonBlueWithIcon>
      </View>
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        {stnk_pkb.map((item, index) => (
          <CardElevation
            key={index}
            onCardClick={() => navigation.navigate('DetailSTNK', item)}>
            <STNKSVG width={'100%'} />
          </CardElevation>
        ))}
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
