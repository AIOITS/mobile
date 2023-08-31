import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import { useNavigation } from '@react-navigation/native';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import CardElevation from '../../components/Card/CardElevation';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import handleDate from '../../utils/convertDate';
import useAjuanSubsidi from '../../hooks/SI-Subsidi/useAjuanSubsidi';
const RiwayatPengajuan = () => {
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

  const id = useAuthContext().user?.id;
  const { loading, error, subsidi } = useAjuanSubsidi(id);

  return (
    <BackgroundWithHeader
      header="Riwayat Pengajuan"
      subHeader="Pengajuan Subsidi yang telah dilakukan"
      backButton
      main
      onBackClick={() => navigation.goBack()}
      bell>
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        {subsidi ? (
          subsidi.map((item, index) => (
            <CardElevation
              onCardClick={() =>
                navigation.navigate('DetailRiwayatPengajuan', item)
              }
              key={index}
              cardStyle="flex flex-row justify-between items-center p-3"
              elevation={2}>
              <View style={{ minWidth: 120 }}>
                <InfoBlockDisplay
                  gap={2}
                  title="Tanggal Pengajuan"
                  titleStyle="text-disable text-xs"
                  subTitle={handleDate(item.tanggal_pengajuan)}
                  subTitleStyle="text-cape-storm text-base font-semibold"
                />
              </View>
              <InfoBlockDisplay
                gap={2}
                title="Jumlah"
                titleStyle="text-disable text-xs"
                subTitle={item.jumlah.toString() + ' L'}
                subTitleStyle="text-cape-storm text-base font-semibold"
              />
              <View
                style={tw(`rounded-md p-1 ${color(item.status_pengajuan)}`)}>
                <Text style={tw('text-xs text-white')}>
                  {item.status_pengajuan}
                </Text>
              </View>
            </CardElevation>
          ))
        ) : (
          <Text>No data</Text>
        )}
      </View>
    </BackgroundWithHeader>
  );
};

export default RiwayatPengajuan;
