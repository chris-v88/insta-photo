import { axiosInstance } from './axiosInstance.api';
import { LoginUserPayload } from '../schemas/user.schema';

export const postLoginUser = async (data: LoginUserPayload) => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data;
};
