import { z } from 'zod';

// Generic API response schema factory - shared across all schemas
export const createApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    status: z.string(),
    statusCode: z.number(),
    message: z.string(),
    data: dataSchema,
  });

// Generic API response type
export type ApiResponse<T> = {
  status: string;
  statusCode: number;
  message: string;
  data: T;
};
