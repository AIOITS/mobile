import { View, Text } from 'react-native';
import React from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useTailwind } from 'tailwind-rn';
import SiIdentitasSVG from '../../assets/menu/si-identitas.svg';
import SITilangSVG from '../../assets/menu/si-tilang.svg';
import MenuCard from '../../components/Card/MenuCard';
import SIMoneySVG from '../../assets/menu/si-money.svg';
import SISubsidi from '../../assets/menu/si-subsidi.svg';
import SILakaSVG from '../../assets/menu/si-laka.svg';
import SILalinSVG from '../../assets/menu/si-lalin.svg';
import SIEdukasiSVG from '../../assets/menu/si-edukasi.svg';
import SIKendaraan from '../../assets/menu/si-kendaraan.svg';
import SITerkini from '../../assets/menu/si-terkini.svg';
import SIGovernment from '../../assets/menu/si-government.svg';

const ServiceScreen = () => {
  const tw = useTailwind();

  return (
    <BackgroundWithHeader
      header="Layanan"
      subHeader="Pilih layanan yang ingin digunakan"
      bell
      main>
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
          title="si-tilang"
          navigateTo="Tilang">
          <SITilangSVG width={48} />
        </MenuCard>
        <MenuCard
          title="si-subsidi"
          navigateTo="Subsidi">
          <SISubsidi width={48} />
        </MenuCard>
        <MenuCard
          title="si-terkini"
          navigateTo="Subsidi">
          <SITerkini width={48} />
        </MenuCard>
        <MenuCard
          title="si-lalin"
          navigateTo="Lalin">
          <SILalinSVG width={48} />
        </MenuCard>
        <MenuCard
          title="si-edukasi"
          navigateTo="Edukasi">
          <SIEdukasiSVG width={48} />
        </MenuCard>
        <MenuCard
          title="si-money"
          navigateTo="Money">
          <SIMoneySVG width={48} />
        </MenuCard>
        <MenuCard
          title="si-gov"
          navigateTo="Government">
          <SIGovernment width={48} />
        </MenuCard>
        <MenuCard
          title="si-laka"
          navigateTo="Laka">
          <SILakaSVG width={48} />
        </MenuCard>
      </View>
    </BackgroundWithHeader>
  );
};

export default ServiceScreen;
