import { axiosInstance } from './axiosInstance.api';

// PAYLOAD -- for creating user
export type CreateUserPayload = {
  email: string;
  username: string;
  full_name: string;
  password: string;
};

export const postRegisterUser = async (data: CreateUserPayload) => {
  const response = await axiosInstance.post('/auth/register', data);
  return response.data;
};
