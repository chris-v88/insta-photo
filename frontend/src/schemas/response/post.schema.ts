import { z } from 'zod';

export const userProfilePostSchema = z.object({
  id: z.number(),
  description: z.string().nullable(),
  imageUrl: z.string(),
  likesCount: z.number().nullable(),
  commentsCount: z.number().nullable(),
  createdAt: z.string(),
});
export type UserProfilePost = z.infer<typeof userProfilePostSchema>;
