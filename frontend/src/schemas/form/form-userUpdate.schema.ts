import { z } from 'zod';

export const userUpdateSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').optional(),
  username: z.string().min(3, 'Username must be at least 3 characters').optional(),
  bio: z.string().max(150, 'Bio must be less than 150 characters').optional(),
  avatar: z.string().url('Invalid avatar URL').optional(),
});
export type UserUpdateFormData = z.infer<typeof userUpdateSchema>;
