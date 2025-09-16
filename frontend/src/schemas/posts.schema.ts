import { z } from 'zod';

// Dashboard/feed response: array of posts/photos
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
});
export type PostResponse = z.infer<typeof dataPostSchema>;

export const dataFeedSchema = z.array(dataPostSchema);
export type ListPostSchema = z.infer<typeof dataFeedSchema>;
