import type { FastifyInstance } from 'fastify';
import {
  addRecipe,
  getRecipeDetail,
  listRecipes,
  modifyRecipe,
  removeRecipe
} from './recipes.service.js';
import { recordRecipeView } from '../history/history.service.js';

export async function recipeRoutes(app: FastifyInstance) {
  app.get('/api/v1/recipes', async () => ({
    code: 0,
    data: await listRecipes()
  }));

  app.get('/api/v1/recipes/:id', async (request) => {
    const { id } = request.params as { id: string };

    if (request.headers.authorization) {
      await request.jwtVerify();
      const user = request.user as { userId: string };
      await recordRecipeView(user.userId, id);
    }

    return {
      code: 0,
      data: await getRecipeDetail(id)
    };
  });

  app.post('/api/v1/recipes', async (request) => ({
    code: 0,
    data: await addRecipe(request.body as any)
  }));

  app.put('/api/v1/recipes/:id', async (request) => {
    const { id } = request.params as { id: string };

    return {
      code: 0,
      data: await modifyRecipe(id, request.body as any)
    };
  });

  app.delete('/api/v1/recipes/:id', async (request) => {
    const { id } = request.params as { id: string };

    await removeRecipe(id);

    return {
      code: 0,
      message: 'success'
    };
  });
}
