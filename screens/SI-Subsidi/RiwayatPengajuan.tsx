import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import {
  RiwayatPengajuanRouteProp,
  SubsidiNavigationProps,
} from '../../navigator/Subsidi/SubsidiNavigationProps';
import { useNavigation, useRoute } from '@react-navigation/native';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import CardElevation from '../../components/Card/CardElevation';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import handleDate from '../../utils/convertDate';
import useAjuanSubsidi from '../../hooks/SI-Subsidi/useAjuanSubsidi';
import VehicleCard from '../../components/Card/VehicleCard';
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

  const { params } = useRoute<RiwayatPengajuanRouteProp>();

  const id = useAuthContext().user?.id;
  const { loading, error, subsidi } = useAjuanSubsidi(id as number);

  return (
    <BackgroundWithHeader
      header="Riwayat Pengajuan"
      subHeader="Pengajuan Subsidi yang telah dilakukan"
      backButton
      main
      loading={loading}
      onBackClick={() => navigation.goBack()}
      bell>
      <View
        style={[
          tw('flex flex-col items-stretch justify-between'),
          { gap: 20 },
        ]}>
        {/* kendaraan start */}
        <ScrollView horizontal={true}>
          <View style={[tw('flex flex-row'), { gap: 10 }]}>
            {params.map((item, index) => (
              <VehicleCard
                key={index}
                vehicleName={`${item.tipe} ${item.merk} ${item.nomor_rangka}`}
                engineSpec={`${item.nomor_mesin}`}
                reminderDate="Jatuh Tempo"
                reminderTitle={`${handleDate(item.berlaku)}`}
                disabled={true}
              />
            ))}
          </View>
        </ScrollView>
        {/* kendaraan end */}

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
      </View>
    </BackgroundWithHeader>
  );
};

export default RiwayatPengajuan;
