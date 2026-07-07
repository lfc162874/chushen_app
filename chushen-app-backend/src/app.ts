import type { FastifyInstance } from 'fastify';

export async function registerApp(app: FastifyInstance) {
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
}
