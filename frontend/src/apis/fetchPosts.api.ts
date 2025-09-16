import { dataListPostSchema } from '../schemas/responseSchema';
import { axiosInstance } from './axiosInstance.api';

export const fetchPosts = async () => {
  try {
    const rawResponse = await axiosInstance.get('/');
    if (rawResponse.data && rawResponse.data.data && rawResponse.data.data.user) {
      return dataListPostSchema.parse(rawResponse.data.data.user);
    } else {
      throw new Error('No user data in response');
    }
  } catch (err) {
    console.error('Login API error:', err);
  }
};
