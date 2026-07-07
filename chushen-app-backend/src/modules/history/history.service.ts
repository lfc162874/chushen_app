import { addHistory, listHistory } from './history.repository.js';

export function recordRecipeView(userId: string, recipeId: string) {
  return addHistory(userId, recipeId);
}

export function getMyHistory(userId: string) {
  return listHistory(userId);
}
