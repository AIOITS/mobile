import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_SIM } from '../../api/graphql/queries/SI-Identitas/getSIM';

function useSIM(userId: number) {
  const { loading, error, data } = useQuery(GET_SIM, {
    variables: { userId: userId },
  });
  const [sim, setSIM] = useState<SIM[]>([]);
  const [ktp, setKTP] = useState<KTPInSIM>({
    tempat_lahir: '',
    tanggal_lahir: '',
    golongan_darah: '',
  });

  useEffect(() => {
    if (!data) return;

    // TODO: masi pre-define
    const sim: SIM[] = data.user[0].ktp.sim.map((item: SIM) => ({
      uid: item.uid,
      nomor_sim: item.nomor_sim,
      jenis_sim: item.jenis_sim,
      nama: item.nama,
      alamat: item.alamat,
      rt: item.rt,
      rw: item.rw,
      kelurahan_desa: item.kelurahan_desa,
      kecamatan: item.kecamatan,
      kabupaten: item.kabupaten,
      pekerjaan: item.pekerjaan,
      kabupaten_terbit: item.kabupaten_terbit,
      tanggal_terbit: item.tanggal_terbit,
      penerbit: item.penerbit,
      berlaku_sampai: item.berlaku_sampai,
    }));

    const ktp: KTPInSIM = data.user[0].ktp;
    const tempatLahir = ktp.tempat_lahir;
    const tanggalLahir = ktp.tanggal_lahir;
    const golonganDarah = ktp.golongan_darah;

    setSIM(sim);
    setKTP({
      tempat_lahir: tempatLahir,
      tanggal_lahir: tanggalLahir,
      golongan_darah: golonganDarah,
    });
  }, [data, userId]);

  return { loading, error, sim, ktp };
}

export default useSIM;
