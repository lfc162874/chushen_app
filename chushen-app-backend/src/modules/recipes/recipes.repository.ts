import { prisma } from '../../plugins/prisma.js';

export function findRecipes() {
  return prisma.recipe.findMany({
    include: { author: true, category: true, media: true },
    orderBy: { createdAt: 'desc' }
  });
}

export function findRecipeById(id: string) {
  return prisma.recipe.findUnique({
    where: { id },
    include: {
      steps: true,
      nutrition: true,
      media: true,
      ingredients: { include: { ingredient: true } }
    }
  });
}

export function createRecipe(data: any) {
  return prisma.recipe.create({ data });
}

export function updateRecipe(id: string, data: any) {
  return prisma.recipe.update({ where: { id }, data });
}

export function deleteRecipe(id: string) {
  return prisma.recipe.delete({ where: { id } });
}
