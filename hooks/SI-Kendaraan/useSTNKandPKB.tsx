import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_STNK_AND_PKB } from '../../api/graphql/queries/SI-Kendaraan/getSTNKandPKB';

function useSTNKandPKB(userId: number) {
  const { loading, error, data } = useQuery(GET_STNK_AND_PKB, {
    variables: { userId: userId },
  });
  const [stnk_pkb, setSTNKandPKB] = useState<STNKandPKB[]>([]);

  useEffect(() => {
    if (!data) return;

    // TODO: masi pre-define
    const stnk_pkb: STNKandPKB[] = data.user[0].ktp.stnk.map(
      (item: STNKandPKB) => ({
        merk: item.merk,
        tipe: item.tipe,
        nomor_mesin: item.nomor_mesin,
        kuota_subsidi: item.kuota_subsidi,
        nomor_rangka: item.nomor_rangka,
        nomor_stnk: item.nomor_stnk,
        nomor_polisi: item.nomor_polisi,
        nama_pemilik: item.nama_pemilik,
        nomor_bpkb: item.nomor_bpkb,
        alamat: item.alamat,
        bahan_bakar: item.bahan_bakar,
        berlaku: item.berlaku,
        jenis: item.jenis,
        model: item.model,
        tahun_pembuatan: item.tahun_pembuatan,
        isi_silinder: item.isi_silinder,
        warna: item.warna,
        warna_tnkb: item.warna_tnkb,
        tahun_registrasi: item.tahun_registrasi,
        nomor_registrasi: item.nomor_registrasi,
        kode_lokasi: item.kode_lokasi,
        nomor_urut_pendaftaran: item.nomor_urut_pendaftaran,
        pkb: item.pkb,
      }),
    );

    setSTNKandPKB(stnk_pkb);
  }, [data, userId]);

  return { loading, error, stnk_pkb };
}

export default useSTNKandPKB;
