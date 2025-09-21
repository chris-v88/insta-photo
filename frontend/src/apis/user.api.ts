import { axiosInstance } from './axiosInstance.api';
import {
  userProfileResponseSchema,
  updateProfileResponseSchema,
  type UpdateUserProfile,
  type UserProfile,
} from '../schemas/form';

// Fetch user profile
export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await axiosInstance.get('/user/profile');
  const validatedResponse = userProfileResponseSchema.parse(response.data);
  return validatedResponse.data;
};

// Update user profile
export const updateUserProfile = async (profileData: UpdateUserProfile): Promise<UserProfile> => {
  const response = await axiosInstance.patch('/user/profile', profileData);
  const validatedResponse = updateProfileResponseSchema.parse(response.data);
  return validatedResponse.data;
};

// Upload user avatar
export const uploadUserAvatar = async (avatarFile: File): Promise<{ avatar: string }> => {
  const formData = new FormData();
  formData.append('avatar', avatarFile);

  const response = await axiosInstance.post('/user/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.data;
};
