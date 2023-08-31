import axios, { AxiosInstance } from 'axios';
import Config from 'react-native-config';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://aioits-backend-q6ihv4us2q-uc.a.run.app',
  timeout: 5000,
});

export default axiosInstance;
