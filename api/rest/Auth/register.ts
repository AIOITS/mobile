import axios from 'axios';
import axiosInstance from '../axiosInstance';

const register = async ({
  name = 'aioits',
  email,
  phone,
  nik,
  password,
}: RegisterInput): Promise<RegisterSuccessResponse | ErrorResponse> => {
  try {
    let data;
    if (email !== undefined) {
      data = {
        name,
        email,
        nik,
        password,
      };
    } else if (phone !== undefined) {
      data = {
        name,
        phone,
        nik,
        password,
      };
    }
    console.log(data);
    const url = 'https://aioits-backend-q6ihv4us2q-uc.a.run.app/auth/register';
    const response = await axios.post(url, data);

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

export default register;
