import { z } from 'zod';
import { dataUserSchema } from './user.schema';
import { dataPostSchema } from './posts.schema';

export const dataCommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  author: dataUserSchema,
  createdAt: z.string(),
});
export type CommentResponse = z.infer<typeof dataCommentSchema>;

export const userProfileResponseSchema = z.object({
  user: dataUserSchema,
  photos: z.array(dataPostSchema),
  saved: z.array(dataPostSchema).optional(),
});
export type UserProfileResponse = z.infer<typeof userProfileResponseSchema>;

export const dataSearchSchema = z.object({
  results: z.array(dataPostSchema),
  total: z.number(),
});
export type SearchResponse = z.infer<typeof dataSearchSchema>;
