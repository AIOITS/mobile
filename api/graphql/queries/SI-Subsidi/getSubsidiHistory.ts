import { gql, useQuery } from '@apollo/client';

export const GET_SUBSIDI_HISTORY = gql`
  query getAjuanSubsidi($userId: Int!) {
    ajuan_subsidi(where: { user_id: { equals: $userId } }) {
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
