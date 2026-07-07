import { prisma } from '../../plugins/prisma.js';

export function getHotRecipes() {
  return prisma.recipe.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export function getRecommendRecipes() {
  return prisma.recipe.findMany({
    take: 10,
    orderBy: {
      favoriteCount: 'desc'
    }
  });
}
