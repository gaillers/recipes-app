import { Recipe } from "@/types";

export const filterRecipes = (recipes: Recipe[] | undefined, selectedCategory: string): Recipe[] => {
  if (!recipes) return [];

  return selectedCategory
    ? recipes.filter(recipe => recipe.strCategory === selectedCategory)
    : recipes;
};

export const paginateRecipes = (recipes: Recipe[], currentPage: number, recipesPerPage: number): Recipe[] => {
  const startIndex = (currentPage - 1) * recipesPerPage;
  
  return recipes.slice(startIndex, startIndex + recipesPerPage);
};
