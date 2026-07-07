import type { FastifyInstance } from 'fastify';
import { login, register } from './auth.service.js';

export async function authRoutes(app: FastifyInstance) {
  app.post('/api/v1/auth/register', async (request) => {
    return {
      code: 0,
      data: await register(request.body as any)
    };
  });

  app.post('/api/v1/auth/login', async (request) => {
    return {
      code: 0,
      data: await login(request.body as any)
    };
  });
}
