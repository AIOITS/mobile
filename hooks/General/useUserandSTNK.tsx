import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_USER_AND_STNK } from '../../api/graphql/queries/General/getUserandSTNK';

function useUserandSTNK(userId: number) {
  const { loading, error, data } = useQuery(GET_USER_AND_STNK, {
    variables: { userId: userId },
  });
  const [userData, setUserData] = useState<UserData>({
    name: '',
    saldo: 0,
    kuota_subsidi: 0,
  });
  const [STNK, setSTNK] = useState<STNK[]>([]);

  useEffect(() => {
    if (!data) return;

    const name = data.user[0].name;
    const saldo = data.user[0].saldo;
    const kuota_subsidi = data.user[0].kuota_subsidi;

    const stnk = data.user[0].ktp.stnk.map((item: STNK) => ({
      nomor_polisi: item.nomor_polisi,
      berlaku: item.berlaku,
      merk: item.merk,
      model: item.model,
      tipe: item.tipe,
      nomor_rangka: item.nomor_rangka,
      nomor_mesin: item.nomor_mesin,
    }));

    setUserData({ name, saldo, kuota_subsidi });
    setSTNK(stnk);
  }, [data, userId]);

  return { loading, user: userData, stnk: STNK, error };
}

export default useUserandSTNK;
