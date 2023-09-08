import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_STNK_NAME } from '../../api/graphql/queries/General/getSTNKName';

// ajuan subsidi not stnk
function useSTNK(userId: number) {
  const { loading, error, data } = useQuery(GET_STNK_NAME, {
    variables: { userId: userId },
  });
  const [subsidi, setSubsidi] = useState<AjuanSubsidi[]>([]);

  useEffect(() => {
    if (!data) return;

    const subsidi: AjuanSubsidi[] = data.ajuan_subsidi.map(
      (item: AjuanSubsidi) => ({
        status_pengajuan: item.status_pengajuan,
        id: item.id,
        alasan: item.alasan,
        dokumen_pendukung: item.dokumen_pendukung,
        tanggal_pengajuan: item.tanggal_pengajuan,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        jumlah: item.jumlah,
      }),
    );

    setSubsidi(subsidi);
  }, [data, userId]);

  return { loading, error, subsidi };
}

export default useSTNK;
