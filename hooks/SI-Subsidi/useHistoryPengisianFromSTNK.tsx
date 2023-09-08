import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_HISTORY_PENGISIAN_FROM_STNK } from '../../api/graphql/queries/SI-Subsidi/getHistoryPengisianFromSTNK';

function useHistoryPengisianFromSTNK(userId: number) {
  const { loading, error, data } = useQuery(GET_HISTORY_PENGISIAN_FROM_STNK, {
    variables: { userId: userId },
  });
  const [stnkHistoryPengisian, setSTNKHistoryPengisian] = useState<
    HistoryPengisianFromSTNK[]
  >([]);

  useEffect(() => {
    if (!data) return;

    // TODO: masi pre-define
    const stnk_history_pengisian = data.user[0].ktp.stnk.map(
      (item: HistoryPengisianFromSTNK) => ({
        merk: item.merk,
        tipe: item.tipe,
        isi_silinder: item.isi_silinder,
        nomor_mesin: item.nomor_mesin,
        nomor_rangka: item.nomor_rangka,
        berlaku: item.berlaku,
        history_pengisian: item.history_pengisian.map(
          (item: HistoryPengisian) => ({
            kategori_pengisian: item.kategori_pengisian,
            nama_spbu: item.nama_spbu,
            jumlah: item.jumlah,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            nomor_stnk: item.nomor_stnk,
          }),
        ),
      }),
    );

    console.log('in hook stnk_history_pengisian');
    console.log(stnk_history_pengisian);

    setSTNKHistoryPengisian(stnk_history_pengisian);
  }, [data, userId]);

  return { loading, error, stnkHistoryPengisian };
}

export default useHistoryPengisianFromSTNK;
