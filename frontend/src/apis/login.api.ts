import { dataUserSchema } from '../schemas/user.schema';
import { axiosInstance } from './axiosInstance.api';

export type LoginUserPayload = {
  username: string;
  password: string;
};

export const postLoginUser = async (data: LoginUserPayload) => {
  try {
    const rawResponse = await axiosInstance.post('/auth/login', data);
    console.log('Login response:', rawResponse.data);
    if (rawResponse.data && rawResponse.data.data && rawResponse.data.data.user) {
      return dataUserSchema.parse(rawResponse.data.data.user);
    } else {
      throw new Error('No user data in response');
    }
  } catch (err) {
    console.error('Login API error:', err);
  }
};
