import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import ButtonComponent from '../../components/Button/ButtonComponent';
import ButtonOutlineComponent from '../../components/Button/ButtonOutlineComponent';
import { useTailwind } from 'tailwind-rn';
import MotorcycleSVG from '../../assets/motorcycle.svg';
import { useNavigation } from '@react-navigation/native';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import CardElevation from '../../components/Card/CardElevation';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import useHistoryPengisianFromSTNK from '../../hooks/SI-Subsidi/useHistoryPengisianFromSTNK';

const Subsidi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();

  const id = useAuthContext().user?.id;
  const { loading, error, stnkHistoryPengisian } = useHistoryPengisianFromSTNK(
    id as number,
  );

  return (
    <BackgroundWithHeader
      header="Si Subsidi"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell
      loading={loading}
      subHeader="Pengelolaan subsidi tepat guna">
      {/* button start */}
      <View
        style={[tw('flex flex-row items-stretch justify-between'), { gap: 5 }]}>
        <ButtonOutlineComponent
          buttonTitle="Riwayat Ajuan"
          onNavigationClick={() =>
            navigation.navigate('RiwayatPengajuan', stnkHistoryPengisian)
          }
          width={'px-7'}
          height={'py-3'}
        />
        <ButtonComponent
          buttonTitle="Ajukan Subsidi"
          width={'px-7'}
          height={'py-3.5'}
          onNavigationClick={() =>
            navigation.navigate(
              'AjukanSubsidi',
              stnkHistoryPengisian.map((item) => ({
                nomor_stnk: item.nomor_stnk,
                nomor_polisi: item.nomor_polisi,
                merk: item.merk,
                model: item.model,
              })),
            )
          }
        />
      </View>
      {/* button end */}

      {/* riwayat start */}
      <View
        style={[tw('flex flex-col justify-center items-stretch'), { gap: 10 }]}>
        {stnkHistoryPengisian.map((item, index) => (
          <CardElevation
            key={index}
            cardStyle="flex flex-row justify-between items-stretch w-full px-3 py-4"
            elevation={2}>
            <MotorcycleSVG height={100} />
            <View style={[tw('flex flex-col justify-center'), { gap: 5 }]}>
              <Text style={tw('text-disable text-xs')}>
                {item.merk} {item.model}
              </Text>
              <Text style={tw('text-cape-storm font-bold text-lg')}>
                {item.nomor_polisi}
              </Text>
              <ButtonOutlineComponent
                buttonTitle="Riwayat Pengisian"
                onNavigationClick={() =>
                  navigation.navigate('RiwayatPengisian', item)
                }
                width={'px-4'}
                height={'py-2.5'}
              />
            </View>
          </CardElevation>
        ))}
      </View>
      {/* riwayat end */}
    </BackgroundWithHeader>
  );
};

export default Subsidi;
