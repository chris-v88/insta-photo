import { z } from 'zod';

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

// Type exports
export type UpdateUserProfile = z.infer<typeof updateUserProfileSchema>;
export type ProfileForm = z.infer<typeof profileFormSchema>;
