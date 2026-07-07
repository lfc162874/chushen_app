import type { FastifyInstance } from 'fastify';
import { getMyHistory } from './history.service.js';

export async function historyRoutes(app: FastifyInstance) {
  app.get('/api/v1/users/me/history', async (request) => {
    await request.jwtVerify();

    const user = request.user as { userId: string };

    return {
      code: 0,
      data: await getMyHistory(user.userId)
    };
  });
}
