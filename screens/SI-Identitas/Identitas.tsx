import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import SmartSimSVG from '../../assets/kartu/smart-sim.svg';
import SIM_A from '../../assets/sim/sim_a.svg';
import SIM_B1 from '../../assets/sim/sim_b1.svg';
import SIM_B2 from '../../assets/sim/sim_b2.svg';
import SIM_C from '../../assets/sim/sim_c.svg';
import CardElevation from '../../components/Card/CardElevation';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { IdentitasNavigationProps } from '../../navigator/Identitas/IdentitasNavigationProps';
import NewCard from '../../components/Card/NewCard';
import useSIM from '../../hooks/SI-Identitas/useSIM';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import handleDate from '../../utils/convertDate';

const Identitas = () => {
  const tw = useTailwind();
  const navigation = useNavigation<IdentitasNavigationProps>();
  const id = useAuthContext().user?.id;
  const { loading, error, sim, ktp } = useSIM(id as number);
  console.log(sim);

  return (
    <BackgroundWithHeader
      main
      backButton
      loading={loading}
      onBackClick={() => navigation.goBack()}
      header="Si Identitas"
      subHeader="Smart SIM Identitas"
      bell>
      <View style={[tw('flex flex-col mb-5'), { gap: 10 }]}>
        {/* card item start */}
        {sim.map((item, index) => (
          <CardElevation
            key={item.uid}
            onCardClick={() =>
              navigation.navigate('DetailSim', { ktp, sim: item })
            }>
            {/* <SmartSimSVG width={'100%'} /> */}
            {item.jenis_sim == 'a_umum' && <SIM_A width={'100%'} />}
            {item.jenis_sim == 'b1' && <SIM_B1 width={'100%'} />}
            {item.jenis_sim == 'b2' && <SIM_B2 width={'100%'} />}
            {item.jenis_sim == 'c' && <SIM_C width={'100%'} />}
            <View
              style={[
                tw(
                  'flex flex-col items-center justify-center absolute left-0 right-0 top-0 bottom-0',
                ),
                { gap: 2 },
              ]}>
              <Text
                style={[
                  tw('font-medium text-center text-xs absolute'),
                  {
                    top: 93,
                    right: 30,
                  },
                ]}>
                {item.nomor_sim}
              </Text>
              <View
                style={[
                  tw('flex flex-col absolute'),
                  { left: 113, gap: 0.5, bottom: 50, maxWidth: 145 },
                ]}>
                <Text style={[{ fontSize: 8 }, tw('font-semibold uppercase')]}>
                  {item.nama}
                </Text>
                <Text
                  style={[{ fontSize: 8 }, tw('font-semibold uppercase')]}>{`${
                  ktp.tempat_lahir
                }, ${handleDate(ktp.tanggal_lahir)}`}</Text>
                <Text style={[{ fontSize: 8 }, tw('font-semibold uppercase')]}>
                  {`${ktp.golongan_darah} - ${ktp.jenis_kelamin}`}
                </Text>
                <Text style={[{ fontSize: 8 }, tw('font-semibold uppercase')]}>
                  {`${item.alamat} RT ${item.rt} RW ${item.rw} Kel. ${item.kelurahan_desa} Kec. ${item.kecamatan} Kab. ${item.kabupaten}`}
                </Text>
                <Text style={[{ fontSize: 8 }, tw('font-semibold uppercase')]}>
                  {item.pekerjaan}
                </Text>
                <Text style={[{ fontSize: 8 }, tw('font-semibold uppercase')]}>
                  {item.kabupaten_terbit}
                </Text>
              </View>
              <Text
                style={[
                  tw('font-medium text-center absolute'),
                  {
                    bottom: 42,
                    right: 27,
                    fontSize: 10,
                  },
                ]}>
                {item.nama}
              </Text>
            </View>
          </CardElevation>
        ))}
        {/* card item end */}

        {/* add card start */}
        <NewCard
          onCardClick={() => navigation.navigate('JenisSIMBaru')}
          title="Tambah SIM Baru"
          height={170}
        />
        {/* add card end */}
      </View>
    </BackgroundWithHeader>
  );
};

export default Identitas;
