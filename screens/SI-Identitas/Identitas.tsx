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
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
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
