import { dataUserSchema } from '../schemas/user.schema';
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

export const postLogoutUser = async () => {
  try {
    const rawResponse = await axiosInstance.post('/auth/logout');
    return rawResponse.data;
  } catch (err: unknown) {
    console.error('Logout API error:', err);

    if (err && typeof err === 'object' && 'response' in err) {
      const axiosError = err as { response?: { data?: { message?: string } }; message?: string };
      throw new Error(axiosError.response?.data?.message || axiosError.message || 'Logout failed');
    }

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Logout failed');
  }
};

export const getAuthCheck = async () => {
  try {
    const rawResponse = await axiosInstance.get('/auth/check');
    if (rawResponse.data && rawResponse.data.data && rawResponse.data.data.user) {
      return {
        isAuthenticated: rawResponse.data.data.isAuthenticated,
        user: dataUserSchema.parse(rawResponse.data.data.user),
      };
    } else {
      throw new Error('No auth data in response');
    }
  } catch (err: unknown) {
    console.error('Auth check API error:', err);

    if (err && typeof err === 'object' && 'response' in err) {
      const axiosError = err as { response?: { data?: { message?: string } }; message?: string };
      throw new Error(
        axiosError.response?.data?.message || axiosError.message || 'Auth check failed'
      );
    }

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Auth check failed');
  }
};
