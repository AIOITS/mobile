import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import {
  DetailRiwayatPengajuanRouteProp,
  SubsidiNavigationProps,
} from '../../navigator/Subsidi/SubsidiNavigationProps';
import { useNavigation, useRoute } from '@react-navigation/native';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import ButtonIcon from '../../components/Button/ButtonIcon';
import { Icon } from '@rneui/themed';
import { PdfNavigationStack } from '../../navigator/Pdf/PdfNavigationProp';

const DetailRiwayatPengajuan = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();
  const navigation_pdf = useNavigation<PdfNavigationStack>();
  const {
    params: { alasan, jumlah, status_pengajuan, dokumen_pendukung },
  } = useRoute<DetailRiwayatPengajuanRouteProp>();

  const color = (status: string): string => {
    if (status === 'diproses') {
      return 'bg-golden';
    } else if (status === 'disetujui') {
      return 'bg-light-green';
    } else {
      return 'bg-strong-pink';
    }
  };

  return (
    <BackgroundWithHeader
      header="Riwayat Pengajuan"
      subHeader="Pengajuan Subsidi yang telah dilakukan"
      backButton
      main
      onBackClick={() => navigation.goBack()}
      bell>
      <View style={[tw('flex flex-col'), { gap: 14 }]}>
        {/* status start */}
        <View style={tw('flex flex-row justify-between items-center')}>
          <Text style={tw('text-lg text-cape-storm font-bold')}>
            Data Ajuan
          </Text>
          <Text
            style={tw(
              `text-white text-sm rounded-md p-1 ${color(status_pengajuan)}`,
            )}>
            {status_pengajuan}
          </Text>
        </View>
        {/* status end */}

        {/* jum subsidi start */}
        <InfoBlockDisplay
          title="Jumlah Subsidi"
          titleStyle="text-disable text-xs"
          subTitle={jumlah.toString() + ' L'}
          subTitleStyle="text-cape-storm font-normal text-sm"
          gap={3}
        />
        {/* jum subsidi end */}

        {/* alasan start */}
        <InfoBlockDisplay
          title="Alasan"
          titleStyle="text-disable text-xs"
          subTitle={alasan}
          subTitleStyle="text-cape-storm font-normal text-sm"
          gap={3}
        />
        {/* alasan end */}

        {/* dokumen start */}
        <View style={[tw('flex flex-col'), { gap: 8 }]}>
          <Text style={tw('text-disable text-xs')}>Dokumen pendukung</Text>
          {dokumen_pendukung?.map((item, index) => (
            <View key={index}>
              {item.name.includes('pdf') && (
                <ButtonIcon
                  titleButton={item.name}
                  onButtonClick={() =>
                    navigation_pdf.navigate('Pdf', {
                      name: item.name,
                      url: item.url,
                    })
                  }>
                  <Icon
                    name={'file-pdf-o'}
                    type="font-awesome"
                    size={25}
                    color="#00A0F3"
                  />
                </ButtonIcon>
              )}
              {item.name.includes('jpg') && (
                <ButtonIcon titleButton={item.name}>
                  <Icon
                    name={'picture-o'}
                    type="font-awesome"
                    size={25}
                    color="#00A0F3"
                  />
                </ButtonIcon>
              )}
            </View>
          ))}
        </View>
        {/* dokumen end */}
      </View>
    </BackgroundWithHeader>
  );
};

export default DetailRiwayatPengajuan;
