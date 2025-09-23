import { likePostResponseSchema, paginatedFeedSchema } from '../schemas/response';
import { axiosInstance } from './axiosInstance.api';

// TYPES
export type CreatePostData = {
  description: string;
  image: File;
};

// API CALLS
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

export const createPost = async (data: CreatePostData) => {
  try {
    const formData = new FormData();
    formData.append('description', data.description);
    formData.append('image', data.image);

    const response = await axiosInstance.post('/posts', formData);

    return response.data;
  } catch (err) {
    console.error('Create post API error:', err);
    throw new Error('Failed to create post');
  }
};

export const likePost = async (postId: string) => {
  try {
    const rawResponse = await axiosInstance.post(`/posts/${postId}/like`);
    if (rawResponse.data && rawResponse.data.data) {
      const response = likePostResponseSchema.parse(rawResponse.data.data);
      return response;
    } else {
      throw new Error('No like post data in response');
    }
  } catch (err) {
    console.error('Like post API error:', err);
    throw new Error('Failed to like post');
  }
};
