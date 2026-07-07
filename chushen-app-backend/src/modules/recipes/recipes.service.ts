import { prisma } from '../../plugins/prisma.js';

export async function listRecipes() {
  return prisma.recipe.findMany({
    include: {
      author: true,
      category: true,
      ingredients: {
        include: {
          ingredient: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export async function getRecipeDetail(id: string) {
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
