import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_SUBSIDI_HISTORY } from '../../api/graphql/queries/SI-Subsidi/getSubsidiHistory';

function useAjuanSubsidi(nomor_stnk: string) {
  const { loading, error, data } = useQuery(GET_SUBSIDI_HISTORY, {
    variables: { nomor_stnk: nomor_stnk },
  });
  const [subsidi, setSubsidi] = useState<AjuanSubsidi[]>([]);

  useEffect(() => {
    if (!data) return;

    const subsidi: AjuanSubsidi[] = data.ajuan_subsidi.map(
      (item: AjuanSubsidi) => ({
        status_pengajuan: item.status_pengajuan,
        id: item.id,
        alasan: item.alasan,
        dokumen_pendukung: item.dokumen_pendukung.map((dokumen) => ({
          name: dokumen.name,
          url: dokumen.url,
        })),
        tanggal_pengajuan: item.tanggal_pengajuan,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        jumlah: item.jumlah,
      }),
    );

    setSubsidi(subsidi);
  }, [data, nomor_stnk]);

  return { loading, error, subsidi };
}

export default useAjuanSubsidi;
