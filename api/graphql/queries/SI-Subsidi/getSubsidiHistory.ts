import { gql, useQuery } from '@apollo/client';

export const GET_SUBSIDI_HISTORY = gql`
  query getAjuanSubsidi($userId: Int!) {
    ajuan_subsidi(where: { userId: { equals: $userId } }) {
      status_pengajuan
      id
      alasan
      dokumen_pendukung
      tanggal_pengajuan
      createdAt
      updatedAt
      jumlah
    }
  }
`;
