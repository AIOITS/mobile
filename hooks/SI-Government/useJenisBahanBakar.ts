import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import deleteUnderscore from '../../utils/deleteUnderscore';
import { GET_JENIS_BAHAN_BAKAR } from '../../api/graphql/queries/SI-Government/getJenisBahanBakar';

function useJenisBahanBakar() {
  const { loading, error, data } = useQuery(GET_JENIS_BAHAN_BAKAR);
  const [jenisBahanBakar, setJenisBahanBakar] = useState<JenisBahanBakar>({
    name: [],
    jumlah: [],
  });

  useEffect(() => {
    if (!data) return;

    const data_history_pengisian = data.jumlah_bbm;
    const data_bbm = data.jenis_bbm;

    const name: string[] = [];

    const jumlah: number[] = [];

    data_bbm.map((item: { name: string }) => {
      name.push(item.name);
    });

    data_history_pengisian.map((item: { _sum: { jumlah: number } }) => {
      jumlah.push(item._sum.jumlah);
    });

    setJenisBahanBakar({
      name,
      jumlah,
    });
  }, [data]);

  return { loading, error, jenisBahanBakar };
}

export default useJenisBahanBakar;
