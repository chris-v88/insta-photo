import { z } from 'zod';
import { userProfileSchema } from '../response/user.schema';

// User profile update schema
export const updateUserProfileSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(255, 'Full name is too long').optional(),
  bio: z.string().max(500, 'Bio is too long').optional(),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username is too long')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
    .optional(),
});

// Form schema for profile editing
export const profileFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(255, 'Full name is too long'),
  bio: z.string().max(500, 'Bio is too long').optional(),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username is too long')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
});

// API response schemas
export const userProfileResponseSchema = z.object({
  status: z.string(),
  statusCode: z.number(),
  message: z.string(),
  data: userProfileSchema,
});

export const updateProfileResponseSchema = z.object({
  status: z.string(),
  statusCode: z.number(),
  message: z.string(),
  data: userProfileSchema.omit({ posts: true }),
});

// Type exports
export type UserProfile = z.infer<typeof userProfileSchema>;
export type UpdateUserProfile = z.infer<typeof updateUserProfileSchema>;
export type ProfileForm = z.infer<typeof profileFormSchema>;
export type UserProfileResponse = z.infer<typeof userProfileResponseSchema>;
export type UpdateProfileResponse = z.infer<typeof updateProfileResponseSchema>;
