import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(3).max(255),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(10),
  imageUrl: z.string().url(),
  tags: z.array(z.string()),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;