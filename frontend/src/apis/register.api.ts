import { axiosInstance } from './axiosInstance.api';

// PAYLOAD -- for creating user
export type CreateUserPayload = {
  email: string;
  username: string;
  full_name: string;
  password: string;
};

export const postRegisterUser = async (data: CreateUserPayload) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data.user;
  } catch (err: unknown) {
    console.error('Register API error:', err);

    if (err && typeof err === 'object' && 'response' in err) {
      const axiosError = err as { response?: { data?: { message?: string } }; message?: string };
      throw new Error(
        axiosError.response?.data?.message || axiosError.message || 'Registration failed'
      );
    }

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Registration failed');
  }
};
