import type { FastifyInstance } from 'fastify';
import { registerPrisma } from './plugins/prisma.js';
import { recipeRoutes } from './modules/recipes/recipes.routes.js';

export async function registerApp(app: FastifyInstance) {
  await registerPrisma(app);

  app.get('/health', async () => ({
    success: true,
    service: 'chushen-backend'
  }));

  app.register(async function discoverRoutes(instance) {
    instance.get('/api/v1/discover/home', async () => ({
      code: 0,
      data: {
        recommendRecipes: [],
        hotRecipes: [],
        communityPosts: []
      }
    }));
  });

  await app.register(recipeRoutes);
}
