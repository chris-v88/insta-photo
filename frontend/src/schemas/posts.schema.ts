import { z } from 'zod';

// User info nested in post
export const userInfoSchema = z.object({
  id: z.union([z.string(), z.number()]),
  username: z.string(),
  avatar: z.string(),
});
export type UserInfo = z.infer<typeof userInfoSchema>;

// Dashboard/feed response: post with user info
export const dataPostSchema = z.object({
  id: z.union([z.string(), z.number()]),
  user_id: z.union([z.string(), z.number()]),
  title: z.string(),
  description: z.string(),
  image_url: z.string(),
  likes_count: z.number(),
  comments_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  Users: userInfoSchema,
});
export type PostResponse = z.infer<typeof dataPostSchema>;

// Paginated feed response
export const paginatedFeedSchema = z.object({
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
  totalPosts: z.number(),
  data: z.array(dataPostSchema),
});
export type PaginatedFeedSchema = z.infer<typeof paginatedFeedSchema>;
