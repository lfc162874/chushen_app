import { prisma } from '../../plugins/prisma.js';

export function findRecipes(skip = 0, take = 20) {
  return Promise.all([
    prisma.recipe.findMany({
      skip,
      take,
      include: { author: true, category: true, media: true },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.recipe.count()
  ]);
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
