import type { FastifyInstance } from 'fastify';
import { favoriteRecipe, getMyFavorites, unfavoriteRecipe } from './favorite.service.js';

export async function favoriteRoutes(app: FastifyInstance) {
  app.post('/api/v1/recipes/:id/favorite', async (request) => {
    await request.jwtVerify();

    const user = request.user as { userId: string };
    const { id } = request.params as { id: string };

    return {
      code: 0,
      data: await favoriteRecipe(user.userId, id)
    };
  });

  app.delete('/api/v1/recipes/:id/favorite', async (request) => {
    await request.jwtVerify();

    const user = request.user as { userId: string };
    const { id } = request.params as { id: string };

    return {
      code: 0,
      data: await unfavoriteRecipe(user.userId, id)
    };
  });

  app.get('/api/v1/users/me/favorites', async (request) => {
    await request.jwtVerify();

    const user = request.user as { userId: string };

    return {
      code: 0,
      data: await getMyFavorites(user.userId)
    };
  });
}
