import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_KTP } from '../../api/graphql/queries/General/getKTP';

function useKTP(userId: number) {
  const { loading, error, data } = useQuery(GET_KTP, {
    variables: { userId: userId },
  });
  const [ktp, setKTP] = useState<KTP>({ nama: '' });

  useEffect(() => {
    if (!data) return;

    const ktp: KTP = data.user[0].ktp;
    const nama = ktp.nama;
    console.log(ktp);

    setKTP({
      nama,
    });
  }, [data, userId]);

  return { loading, error, ktp };
}

export default useKTP;
