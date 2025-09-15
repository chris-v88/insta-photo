import { z } from 'zod';

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
