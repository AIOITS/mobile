import { gql, useQuery } from '@apollo/client';

export const GET_SUBSIDI_HISTORY = gql`
  query getAjuanSubsidi($nomor_stnk: String!) {
    ajuan_subsidi(where: { nomor_stnk: { equals: $nomor_stnk } }) {
      status_pengajuan
      id
      alasan
      dokumen_pendukung {
        name
        url
      }
      tanggal_pengajuan
      createdAt
      updatedAt
      jumlah
    }
  }
`;
