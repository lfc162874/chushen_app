import { findRecipeById, findRecipes } from './recipes.repository.js';

export async function listRecipes() {
  return findRecipes();
}

export async function getRecipeDetail(id: string) {
  return findRecipeById(id);
}
