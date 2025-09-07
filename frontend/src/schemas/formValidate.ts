import { z } from 'zod';

// User schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
export type RegisterFormData = z.infer<typeof registerSchema>;

export const commentSchema = z.object({
  content: z.string().min(1, 'Comment cannot be empty'),
});
export type CommentFormData = z.infer<typeof commentSchema>;

export const userUpdateSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .optional(),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .optional(),
  bio: z.string().max(150, 'Bio must be less than 150 characters').optional(),
  avatar: z.string().url('Invalid avatar URL').optional(),
});
export type UserUpdateFormData = z.infer<typeof userUpdateSchema>;
