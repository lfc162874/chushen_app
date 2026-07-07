import { prisma } from '../../plugins/prisma.js';

export function addHistory(userId: string, recipeId: string) {
  return prisma.userHistory.create({
    data: {
      userId,
      recipeId
    }
  });
}

export function listHistory(userId: string) {
  return prisma.userHistory.findMany({
    where: { userId },
    include: {
      recipe: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}
