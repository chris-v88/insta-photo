import { z } from 'zod';
import { createApiResponseSchema } from './responseSchema';

// User profile post schema (for user profile pages)
export const userProfilePostSchema = z.object({
  id: z.number(),
  description: z.string().nullable(),
  imageUrl: z.string(),
  likesCount: z.number().nullable(),
  commentsCount: z.number().nullable(),
  createdAt: z.string(),
});

// User info nested in post (for feed/dashboard)
export const userInfoSchema = z.object({
  id: z.union([z.string(), z.number()]),
  username: z.string(),
  avatar: z.string(),
});

// Dashboard/feed post schema (with user info)
export const dataPostSchema = z.object({
  id: z.union([z.string(), z.number()]),
  user_id: z.union([z.string(), z.number()]),
  description: z.string(),
  image_url: z.string(),
  likes_count: z.number(),
  comments_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  Users: userInfoSchema,
});

// Paginated feed response
export const paginatedFeedSchema = z.object({
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
  totalPosts: z.number(),
  data: z.array(dataPostSchema),
});

// API response schemas
export const postsResponseSchema = createApiResponseSchema(paginatedFeedSchema);
export const postResponseSchema = createApiResponseSchema(dataPostSchema);

// Type exports
export type UserProfilePost = z.infer<typeof userProfilePostSchema>;
export type UserInfo = z.infer<typeof userInfoSchema>;
export type PostResponse = z.infer<typeof dataPostSchema>;
export type PaginatedFeedSchema = z.infer<typeof paginatedFeedSchema>;
export type PostsResponse = z.infer<typeof postsResponseSchema>;
export type SinglePostResponse = z.infer<typeof postResponseSchema>;
