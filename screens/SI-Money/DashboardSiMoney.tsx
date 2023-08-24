import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import ButtonIcon from '../../components/Button/ButtonIcon';
import HistoryBlueSVG from '../../assets/kartu/history-blue.svg';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { MoneyNavigationProps } from '../../navigator/Money/MoneyNavigationProp';
import SIMoneyCardSVG from '../../assets/kartu/si-money-card.svg';
import { Icon } from '@rneui/themed';

const DashboardSiMoney = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MoneyNavigationProps>();

  return (
    <BackgroundWithHeader
      header="SI Money"
      subHeader="Sistem pembayaran cashless"
      bell
      backButton
      onBackClick={() => navigation.goBack()}
      main>
      {/* button start */}
      <View style={tw('flex flex-row justify-between items-center z-20')}>
        <ButtonIcon
          onButtonClick={() => navigation.navigate('RiwayatSiMoney')}
          customButton="border-primary-light-blue border-2"
          titleButton="Riwayat"
          titleButtonStyle="text-primary-light-blue font-semibold"
          right>
          <HistoryBlueSVG width={20} />
        </ButtonIcon>
        <ButtonComponent
          buttonTitle="Top Up"
          height={'py-2.5'}
          width={'px-5'}
          onNavigationClick={() => navigation.navigate('MetodeTopUp')}
        />
      </View>
      {/* button end */}

      {/* money card start */}
      <View style={[tw('relative'), { height: 220 }]}>
        <SIMoneyCardSVG width={'100%'} />
        <View
          style={[
            tw(
              'flex flex-col items-center justify-center absolute left-0 right-0 top-0 bottom-0',
            ),
            { gap: 2 },
          ]}>
          <Text style={tw('text-white font-light text-xs text-center')}>
            Saldo
          </Text>
          <Text style={tw('text-white font-bold text-lg text-center')}>
            Rp 0
          </Text>
          <Text style={tw('text-white font-light text-xs text-center')}>
            Pengecekan terakhir : 13/10/2022 : 13:45:43
          </Text>
          <ButtonComponent
            buttonTitle="Cek Saldo"
            buttonTitleStyle="text-primary-light-blue font-semibold text-sm"
            buttonStyle="bg-white mt-2"
            height={'py-1'}
            onNavigationClick={() => navigation.navigate('CekSaldo')}
          />
          <Text
            style={tw(
              'text-white font-bold text-base text-center absolute right-4 bottom-4',
            )}>
            1110 2022 1210 2022
          </Text>
        </View>
      </View>
      {/* money card end */}

      {/* kartu start */}
      <View style={[tw('flex flex-col'), { gap: 5 }]}>
        <Text style={tw('text-cape-storm text-sm')}>Nomor Kartu</Text>
        <View
          style={[
            tw(
              'flex flex-row justify-between items-center px-4 py-3 rounded-lg border-disable',
            ),
            { borderWidth: 1 },
          ]}>
          <Text>1110 2022 1210 2022</Text>
          <TouchableOpacity>
            <Icon
              name="copy"
              type="font-awesome-5"
              size={20}
              color={'#00A0F3'}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* kartu end */}
    </BackgroundWithHeader>
  );
};

export default DashboardSiMoney;
