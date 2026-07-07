import { addFavorite, listFavorites, removeFavorite } from './favorite.repository.js';

export function favoriteRecipe(userId: string, recipeId: string) {
  return addFavorite(userId, recipeId);
}

export function unfavoriteRecipe(userId: string, recipeId: string) {
  return removeFavorite(userId, recipeId);
}

export function getMyFavorites(userId: string) {
  return listFavorites(userId);
}
