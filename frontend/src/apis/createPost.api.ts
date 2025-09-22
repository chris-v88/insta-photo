import { axiosInstance } from './axiosInstance.api';

export type CreatePostData = {
  description: string;
  image: File;
};

export const createPost = async (data: CreatePostData) => {
  const formData = new FormData();
  formData.append('description', data.description);
  formData.append('image', data.image);

  const response = await axiosInstance.post('/posts/create', formData);

  return response.data;
};
