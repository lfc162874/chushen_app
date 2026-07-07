import { prisma } from '../../plugins/prisma.js';

export function addFavorite(userId: string, recipeId: string) {
  return prisma.recipeFavorite.create({
    data: { userId, recipeId }
  });
}

export function removeFavorite(userId: string, recipeId: string) {
  return prisma.recipeFavorite.delete({
    where: {
      userId_recipeId: {
        userId,
        recipeId
      }
    }
  });
}

export function listFavorites(userId: string) {
  return prisma.recipeFavorite.findMany({
    where: { userId },
    include: { recipe: true },
    orderBy: { createdAt: 'desc' }
  });
}
