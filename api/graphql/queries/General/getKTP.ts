import { gql, useQuery } from '@apollo/client';

export const GET_KTP = gql`
  query getKTP($userId: Int!) {
    user(where: { id: { equals: $userId } }) {
      ktp {
        nama
      }
    }
  }
`;
