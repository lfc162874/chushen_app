import { z } from 'zod';

export const recipeQuerySchema = z.object({
  keyword: z.string().optional(),
  categoryId: z.string().optional()
});

export const createRecipeSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  cover: z.string().optional(),
  difficulty: z.string().optional(),
  cookMinutes: z.number().optional()
});
