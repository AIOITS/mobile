import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavProp } from '../../navigator/Menu/Menu';
import SISubsidi from '../../assets/menu/si-subsidi.svg';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import { Divider } from '@rneui/themed';
import SIKendaraan from '../../assets/menu/si-kendaraan.svg';

const data = [
  {
    title: 'L 1150 CC telah diisi BBM sebanyak 1.9 L di SPBU Surabaya Soetomo',
    time: '2m yang lalu',
    status: 'bahan-bakar',
  },
  {
    title: 'Nurul Sofia ingin meminjam kendaraan L 1150 CC',
    time: '2m yang lalu',
    status: 'kendaraan',
  },
];

const NotifyScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<BottomTabNavProp>();

  return (
    <BackgroundWithHeader
      main
      header="Notifikasi"
      subHeader="Pemberitahuan menunggumu"
      backButton
      onBackClick={() => navigation.goBack()}>
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        {data ? (
          data.map((item, index) => (
            <View>
              <View
                style={tw('flex flex-row items-center justify-start mr-20')}
                key={index}>
                {item.status == 'bahan-bakar' && (
                  <SISubsidi
                    width={35}
                    style={{ minWidth: 80 }}
                  />
                )}
                {item.status == 'kendaraan' && (
                  <SIKendaraan
                    width={35}
                    style={{ minWidth: 80 }}
                  />
                )}
                <InfoBlockDisplay
                  gap={3}
                  title={item.title}
                  subTitle={item.time}
                  titleStyle="text-sm text-cape-storm"
                  subTitleStyle="text-disable text-xs font-light"
                />
              </View>
              {index != data.length - 1 && (
                <Divider
                  color="gray"
                  style={tw('mt-3')}
                />
              )}
            </View>
          ))
        ) : (
          <Text>Tidak ada notifikasi</Text>
        )}
      </View>
    </BackgroundWithHeader>
  );
};

export default NotifyScreen;
