import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useTailwind } from 'tailwind-rn';
import VehicleCard from '../../components/Card/VehicleCard';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import SiIdentitasSVG from '../../assets/menu/si-identitas.svg';
import SIKendaraan from '../../assets/menu/si-kendaraan.svg';
import MenuCard from '../../components/Card/MenuCard';
import SIMoneySVG from '../../assets/menu/si-money.svg';
import SISubsidi from '../../assets/menu/si-subsidi.svg';
import SIGovernment from '../../assets/menu/si-government.svg';
import OtherSVG from '../../assets/menu/other.svg';
import { useNavigation } from '@react-navigation/native';
import { MoneyNavigationProps } from '../../navigator/Money/MoneyNavigationProp';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import useHistoryPengisianFromSTNK from '../../hooks/SI-Subsidi/useHistoryPengisianFromSTNK';
import handleDate from '../../utils/convertDate';
import useKTP from '../../hooks/General/useKTP';
import useUserandSTNK from '../../hooks/General/useUserandSTNK';

const HomeScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MoneyNavigationProps>();

  const id = useAuthContext().user?.id;

  const { loading, error, stnk, user } = useUserandSTNK(id as number);

  return (
    <BackgroundWithHeader
      header="Selamat Datang"
      subHeader={`${user.name}`}
      main
      bell
      loading={loading}
      reverseHeader>
      {/* kendaraan start */}
      <ScrollView horizontal={true}>
        <View style={[tw('flex flex-row'), { gap: 10 }]}>
          {stnk.map((item, index) => (
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

      {/* subsidi & saldo start */}
      <View style={tw('flex flex-row items-stretch justify-center h-24 ')}>
        <View
          style={[
            tw(
              'rounded-tl-lg rounded-bl-lg border-primary-light-blue border-l-2 border-t-2 border-b-2 items-center justify-center',
            ),
            { width: '50%' },
          ]}>
          <InfoBlockDisplay
            title="Sisa Subsidi"
            subTitle="30 Liter"
            titleStyle="text-disable text-center"
            subTitleStyle="text-cape-storm text-center"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CekSaldo')}
          style={[
            tw(
              'bg-primary-light-blue rounded-tr-lg rounded-br-lg justify-center',
            ),
            { width: '50%' },
          ]}>
          <InfoBlockDisplay
            title="Saldo Emoney"
            subTitle="Rp0"
            titleStyle="text-center text-white"
            subTitleStyle="text-center text-white text-lg"
            info="3j lalu"
            detailInfo="Cek Saldo"
          />
        </TouchableOpacity>
      </View>
      {/* subsidi & saldo end */}

      {/* menu start */}
      <View
        style={[
          tw('flex flex-row items-center flex-wrap justify-start'),
          { gap: 8 },
        ]}>
        <MenuCard
          title="si-identitas"
          navigateTo="Identitas">
          <SiIdentitasSVG width={48} />
        </MenuCard>
        <MenuCard
          title="si-kendaraan"
          navigateTo="Kendaraan">
          <SIKendaraan width={48} />
        </MenuCard>
        <MenuCard
          title="si-money"
          navigateTo="Money">
          <SIMoneySVG width={48} />
        </MenuCard>
        <MenuCard
          title="si-subsidi"
          navigateTo="Subsidi">
          <SISubsidi width={48} />
        </MenuCard>
        <MenuCard
          title="si-gov"
          navigateTo="Government">
          <SIGovernment width={48} />
        </MenuCard>
        <MenuCard
          title="lainnya"
          navigateTo="Other">
          <OtherSVG width={48} />
        </MenuCard>
      </View>
      {/* menu end */}

      {/* lalu lintas start */}
      <View style={[tw('flex flex-col mb-5'), { gap: 5 }]}>
        <Text style={tw('text-cape-storm text-lg font-semibold')}>
          Lalu lintas terkini
        </Text>
        <View style={[tw('flex flex-col'), { gap: 3 }]}>
          <Image
            source={require('../../assets/images/image.png')}
            style={[{ resizeMode: 'contain' }, tw('w-full')]}
          />
          <Text style={tw('text-cape-storm font-semibold text-base')}>
            Underpass Mataram Diuji Coba, Lalu Lintas Macet Parah
          </Text>
        </View>
      </View>
      {/* lalu lintas end */}
    </BackgroundWithHeader>
  );
};

export default HomeScreen;
