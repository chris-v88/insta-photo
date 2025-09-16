import { z } from 'zod';

// User object returned from backend
export const dataUserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  email: z.string().email(),
  username: z.string(),
  full_name: z.string(),
  avatar: z.string().url(),
  bio: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  is_admin: z.boolean().optional(),
});
export type UserResponse = z.infer<typeof dataUserSchema>;

export const dataCommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  author: dataUserSchema,
  createdAt: z.string(),
});
export type CommentResponse = z.infer<typeof dataCommentSchema>;

// Post/Post object returned from backend
export const dataPostSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  caption: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  author: dataUserSchema,
  likes: z.number(),
  comments: z.array(dataCommentSchema),
  tags: z.array(z.string()).optional(),
});
export type PostResponse = z.infer<typeof dataPostSchema>;

export const dataListPostSchema = z.array(dataPostSchema);
export type ListPostSchema = z.infer<typeof dataListPostSchema>;

// Dashboard/feed response: array of posts/photos
export const dataFeedSchema = z.array(dataPostSchema);
export type FeedResponse = z.infer<typeof dataFeedSchema>;

// Example: API response for user profile
export const userProfileResponseSchema = z.object({
  user: dataUserSchema,
  photos: z.array(dataPostSchema),
  saved: z.array(dataPostSchema).optional(),
});
export type UserProfileResponse = z.infer<typeof userProfileResponseSchema>;

// Example: API response for search
export const dataSearchSchema = z.object({
  results: z.array(dataPostSchema),
  total: z.number(),
});
export type SearchResponse = z.infer<typeof dataSearchSchema>;
