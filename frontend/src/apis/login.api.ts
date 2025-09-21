import { dataUserSchema } from '../schemas/response';
import { axiosInstance } from './axiosInstance.api';

export type LoginUserPayload = {
  username: string;
  password: string;
};

export const postLoginUser = async (data: LoginUserPayload) => {
  try {
    const rawResponse = await axiosInstance.post('/auth/login', data);
    if (rawResponse.data && rawResponse.data.data && rawResponse.data.data.user) {
      return dataUserSchema.parse(rawResponse.data.data.user);
    } else {
      throw new Error('No user data in response');
    }
  } catch (err: unknown) {
    console.error('Login API error:', err);

    if (err && typeof err === 'object' && 'response' in err) {
      const axiosError = err as { response?: { data?: { message?: string } }; message?: string };
      throw new Error(axiosError.response?.data?.message || axiosError.message || 'Login failed');
    }

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Login failed');
  }
};
