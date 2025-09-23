import { z } from 'zod';
import { userProfilePostSchema } from './post.schema';
import { createApiResponseSchema } from './responseSchema';

// User object returned from backend
export const dataUserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  email: z.string().email(),
  username: z.string(),
  full_name: z.string().optional(),
  avatar: z.string().url().nullable().optional(),
  bio: z.string().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  is_admin: z.boolean().optional(),
});
export type UserResponse = z.infer<typeof dataUserSchema>;

// User profile response schema (for authenticated user's own profile)
export const userProfileSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  fullName: z.string().nullable(),
  avatar: z.string().nullable(),
  bio: z.string().nullable(),
  isAdmin: z.boolean().nullable(),
  followersCount: z.number().nullable(),
  followingCount: z.number().nullable(),
  postsCount: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
  posts: z.array(userProfilePostSchema).optional(),
});
export type UserProfile = z.infer<typeof userProfileSchema>;

// Public profile response schema (for viewing other users' profiles)
export const publicProfileSchema = z.object({
  id: z.number(),
  username: z.string(),
  fullName: z.string().nullable(),
  avatar: z.string().nullable(),
  bio: z.string().nullable(),
  followersCount: z.number().nullable(),
  followingCount: z.number().nullable(),
  postsCount: z.number(),
  createdAt: z.string(),
  posts: z.array(userProfilePostSchema).optional(),
});
export type PublicProfile = z.infer<typeof publicProfileSchema>;

// API response schemas
export const userProfileResponseSchema = createApiResponseSchema(userProfileSchema);
export type UserProfileResponse = z.infer<typeof userProfileResponseSchema>;

export const publicProfileResponseSchema = createApiResponseSchema(publicProfileSchema);
export type PublicProfileResponse = z.infer<typeof publicProfileResponseSchema>;

export const updateProfileResponseSchema = createApiResponseSchema(
  userProfileSchema.omit({ posts: true })
);
export type UpdateProfileResponse = z.infer<typeof updateProfileResponseSchema>;
