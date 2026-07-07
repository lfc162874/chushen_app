import type { FastifyInstance } from 'fastify';
import { getRecipeDetail, listRecipes } from './recipes.service.js';

export async function recipeRoutes(app: FastifyInstance) {
  app.get('/api/v1/recipes', async () => {
    return {
      code: 0,
      data: await listRecipes()
    };
  });

  app.get('/api/v1/recipes/:id', async (request) => {
    const { id } = request.params as { id: string };

    return {
      code: 0,
      data: await getRecipeDetail(id)
    };
  });
}
