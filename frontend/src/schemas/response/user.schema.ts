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

// API response schemas
export const userProfileResponseSchema = createApiResponseSchema(userProfileSchema);
export const publicProfileResponseSchema = createApiResponseSchema(publicProfileSchema);
export const updateProfileResponseSchema = createApiResponseSchema(
  userProfileSchema.omit({ posts: true })
);

// Type exports
export type UserProfile = z.infer<typeof userProfileSchema>;
export type PublicProfile = z.infer<typeof publicProfileSchema>;
export type UserProfileResponse = z.infer<typeof userProfileResponseSchema>;
export type PublicProfileResponse = z.infer<typeof publicProfileResponseSchema>;
export type UpdateProfileResponse = z.infer<typeof updateProfileResponseSchema>;
