import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';

const ajuan_subsidi = async ({
  jumlah,
  alasan,
  nomor_stnk,
  dokumen_pendukung,
  tanggal_pengajuan,
  access_token,
}: AjuanSubsidiInput): Promise<AjuanSubsidiSuccessResponse | ErrorResponse> => {
  try {
    const url = 'https://aioits-backend-q6ihv4us2q-uc.a.run.app/ajuan-subsidi';
    const formData = new FormData();
    formData.append('jumlah', jumlah.toString());
    formData.append('alasan', alasan);
    formData.append('nomor_stnk', nomor_stnk);
    for (const file of dokumen_pendukung) {
      const data = {
        uri: file.assets[0].uri,
        type: file.assets[0].mimeType,
        name: file.assets[0].name,
      };
      formData.append('dokumen_pendukung', data as any);
    }
    formData.append('tanggal_pengajuan', tanggal_pengajuan);
    console.log('formData=============');
    console.log(formData);
    const response = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('response in be');
    console.log(response);

    if (response.status === 201) {
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

export default ajuan_subsidi;
