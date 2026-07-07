import { prisma } from '../../plugins/prisma.js';

export function findRecipes() {
  return prisma.recipe.findMany({
    include: {
      author: true,
      category: true,
      media: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export function findRecipeById(id: string) {
  return prisma.recipe.findUnique({
    where: { id },
    include: {
      steps: true,
      nutrition: true,
      media: true,
      ingredients: {
        include: {
          ingredient: true
        }
      }
    }
  });
}
