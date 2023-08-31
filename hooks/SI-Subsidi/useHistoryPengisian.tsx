import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_HISTORY_PENGISIAN } from '../../api/graphql/queries/SI-Subsidi/getHistoryPengisian';

function useHistoryPengisian(userId: string) {
  const { loading, error, data } = useQuery(GET_HISTORY_PENGISIAN, {
    variables: { userId },
  });
  const [pengisian, setPengisian] = useState<HistoryPengisian[]>([]);

  useEffect(() => {
    if (!data) return;

    const pengisian: HistoryPengisian[] = data.history_pengisian.map(
      (item: HistoryPengisian) => ({
        createdAt: item.createdAt,
        jumlah: item.jumlah,
        kategori_pengisian: item.kategori_pengisian,
        nama_spbu: item.nama_spbu,
        nomor_stnk: item.nomor_stnk,
        updatedAt: item.updatedAt,
      }),
    );

    setPengisian(pengisian);
  }, [data]);

  return { loading, error, pengisian };
}

export default useHistoryPengisian;
