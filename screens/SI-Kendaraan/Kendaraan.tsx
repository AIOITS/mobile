import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../navigator/Kendaraan/KendaraanNavigationProps';
import SimCardSVG from '../../assets/kartu/sim-card-small.svg';
import STNKSVG from '../../assets/kartu/frame_stnk.svg';
import CardElevation from '../../components/Card/CardElevation';
import NewCard from '../../components/Card/NewCard';
import ButtonBlueWithIcon from '../../components/Button/ButtonBlueWithIcon';
import useSTNKandPKB from '../../hooks/SI-Kendaraan/useSTNKandPKB';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import handleDate from '../../utils/convertDate';

const Kendaraan = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const id = useAuthContext().user?.id;
  const { loading, error, stnk_pkb } = useSTNKandPKB(id as number);

  return (
    <BackgroundWithHeader
      header="SI Kendaraan"
      subHeader="Surat kendaraan digital"
      backButton
      loading={loading}
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
      <View style={[tw('flex flex-col mb-5'), { gap: 10 }]}>
        {stnk_pkb.map((item, index) => (
          <View
            style={[tw('relative')]}
            key={index}>
            <CardElevation
              onCardClick={() => navigation.navigate('DetailSTNK', item)}>
              <STNKSVG width={'100%'} />
              <View
                style={[
                  tw(
                    'flex flex-col items-center justify-center absolute left-0 right-0 top-0 bottom-0',
                  ),
                  { gap: 2 },
                ]}>
                <Text style={[tw('font-bold text-lg'), { bottom: 30 }]}>
                  {item.nomor_polisi}
                </Text>
                <Text
                  style={[
                    { bottom: 33 },
                    tw('text-xs'),
                  ]}>{`${item.merk} ${item.model}`}</Text>
                <Text
                  style={[
                    tw('font-bold text-xs text-center absolute'),
                    { bottom: 45, right: 40 },
                  ]}>
                  {handleDate(item.berlaku)}
                </Text>
              </View>
            </CardElevation>
          </View>
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
