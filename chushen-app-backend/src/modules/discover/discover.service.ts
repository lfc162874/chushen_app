import { getHotRecipes, getRecommendRecipes } from './discover.repository.js';

export async function getDiscoverHome() {
  const [recommendRecipes, hotRecipes] = await Promise.all([
    getRecommendRecipes(),
    getHotRecipes()
  ]);

  return {
    recommendRecipes,
    hotRecipes,
    continueCooking: [],
    communityPosts: []
  };
}
