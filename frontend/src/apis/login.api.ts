import { dataUserSchema } from '../schemas/user.schema';
import { axiosInstance } from './axiosInstance.api';

export type LoginUserPayload = {
  username: string;
  password: string;
};

export const postLoginUser = async (data: LoginUserPayload) => {
  try {
    const rawResponse = await axiosInstance.post('/auth/login', data);
    const resposne = dataUserSchema.parse(rawResponse.data);
    return resposne;
  } catch (err) {
    console.error('Login API error:', err);
  }
};
