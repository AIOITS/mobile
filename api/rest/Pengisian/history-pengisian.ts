import axios from 'axios';

const history_pengisian = async ({
  jumlah,
  nama_spbu,
  kategori_pengisian,
  nomor_stnk,
  access_token,
}: HistoryPengisianInput): Promise<
  HistoryPengisianSuccessResponse | ErrorResponse
> => {
  try {
    const url =
      'https://aioits-backend-q6ihv4us2q-uc.a.run.app/history-pengisian';
    const response = await axios.post(url, {
      jumlah,
      nama_spbu,
      kategori_pengisian,
      nomor_stnk,
      Headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response;
        console.log(data.message);
        return {
          statusCode: status,
          message: data.message,
        };
      } else if (error.request) {
        console.error('No response received:', error.request);
        return {
          statusCode: 500,
          message: 'No response received',
        };
      } else {
        console.error('Error:', error.message);
        return {
          statusCode: 500,
          message: 'Something else happened',
        };
      }
    } else {
      console.error('Non-Axios error:', (error as Error).message);
      return {
        statusCode: 500,
        message: 'Non-Axios error',
      };
    }
  }
};

export default history_pengisian;
