import type { FastifyInstance } from 'fastify';

export async function userRoutes(app: FastifyInstance) {
  app.get('/api/v1/users/me', async (request) => {
    await request.jwtVerify();

    return {
      code: 0,
      data: request.user
    };
  });
}
