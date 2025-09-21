import { paginatedFeedSchema } from '../schemas/response';
import { axiosInstance } from './axiosInstance.api';

export const fetchPosts = async ({ limit, page }: { limit: number; page: number }) => {
  try {
    const rawResponse = await axiosInstance.get('/posts', { params: { limit, page } });
    if (rawResponse.data && rawResponse.data.data) {
      const response = paginatedFeedSchema.parse(rawResponse.data.data);
      return response;
    } else {
      throw new Error('No posts data in response');
    }
  } catch (err) {
    console.error('Fetch posts API error:', err);
    throw new Error('Failed to fetch posts');
  }
};
