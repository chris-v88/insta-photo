import { z } from 'zod';

export const postSchema = z.object({
  description: z
    .string()
    .min(1, 'Description is required')
    .max(2000, 'Description cannot exceed 2000 characters'),
  image: z
    .any()
    .refine((file) => file && file instanceof File, 'Please select an image file')
    .refine((file) => file && file.size <= 10 * 1024 * 1024, 'Image size must be less than 10MB')
    .refine(
      (file) => file && ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type),
      'Only JPEG, PNG, and GIF files are allowed'
    ),
});

export type PostFormData = z.infer<typeof postSchema>;
