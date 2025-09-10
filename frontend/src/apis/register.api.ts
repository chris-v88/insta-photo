import { axiosInstance } from './axiosInstance.api';
import { CreateUserPayload } from '../schemas/user.schema';

export const postRegisterUser = async (data: CreateUserPayload) => {
  const response = await axiosInstance.post('/auth/register', data);
  return response.data;
};
