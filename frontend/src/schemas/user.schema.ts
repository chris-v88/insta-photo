import { z } from 'zod';

// User object returned from backend
export const dataUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  fullName: z.string(),
  avatar: z.string().url(),
  bio: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  isAdmin: z.boolean().optional(),
});
export type UserResponse = z.infer<typeof dataUserSchema>;

// PAYLOAD -- for creating user
export type CreateUserPayload = {
  email: string;
  username: string;
  full_name: string;
  password: string;
};
