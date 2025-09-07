import { z } from 'zod';

// User object returned from backend
export const dataUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  fullName: z.string(),
  avatar: z.string().url(),
  bio: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  isAdmin: z.boolean().optional(),
});
export type UserResponse = z.infer<typeof dataUserSchema>;

// Photo/Post object returned from backend
export const dataPhotoSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  caption: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  author: dataUserSchema,
  likes: z.number(),
  comments: z.array(
    z.object({
      id: z.string(),
      content: z.string(),
      author: dataUserSchema,
      createdAt: z.string(),
    })
  ),
  tags: z.array(z.string()).optional(),
});
export type PhotoResponse = z.infer<typeof dataPhotoSchema>;

// Dashboard/feed response: array of posts/photos
export const dataFeedSchema = z.array(dataPhotoSchema);
export type FeedResponse = z.infer<typeof dataFeedSchema>;

// Example: API response for user profile
export const userProfileResponseSchema = z.object({
  user: dataUserSchema,
  photos: z.array(dataPhotoSchema),
  saved: z.array(dataPhotoSchema).optional(),
});
export type UserProfileResponse = z.infer<typeof userProfileResponseSchema>;

// Example: API response for search
export const dataSearchSchema = z.object({
  results: z.array(dataPhotoSchema),
  total: z.number(),
});
export type SearchResponse = z.infer<typeof dataSearchSchema>;
