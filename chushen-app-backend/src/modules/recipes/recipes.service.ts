import {
  createRecipe,
  deleteRecipe,
  findRecipeById,
  findRecipes,
  updateRecipe
} from './recipes.repository.js';
import type { CreateRecipeDTO, UpdateRecipeDTO } from './recipes.dto.js';

export async function listRecipes() {
  return findRecipes();
}

export async function getRecipeDetail(id: string) {
  return findRecipeById(id);
}

export async function addRecipe(data: CreateRecipeDTO) {
  return createRecipe(data);
}

export async function modifyRecipe(id: string, data: UpdateRecipeDTO) {
  return updateRecipe(id, data);
}

export async function removeRecipe(id: string) {
  return deleteRecipe(id);
}
