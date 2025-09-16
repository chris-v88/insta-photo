import { dataFeedSchema } from '../schemas/posts.schema';
import { axiosInstance } from './axiosInstance.api';

export const fetchPosts = async () => {
  try {
    const rawResponse = await axiosInstance.get('/posts');
    if (rawResponse.data && rawResponse.data.data) {
      const response = dataFeedSchema.parse(rawResponse.data.data);
      console.log('🚀 ~ fetchPosts ~ response:', response);
      return response;
    } else {
      throw new Error('No posts data in response');
    }
  } catch (err) {
    console.error('Fetch posts API error:', err);
    throw new Error('Error on fetching API error');
  }
};
