import { PrismaClient } from '@prisma/client';
import type { FastifyInstance } from 'fastify';

export const prisma = new PrismaClient();

export async function registerPrisma(app: FastifyInstance) {
  app.decorate('prisma', prisma);

  app.addHook('onClose', async () => {
    await prisma.$disconnect();
  });
}
