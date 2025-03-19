import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Recipe } from '@/types';

export const useSelectedRecipes = () => {
  const queryClient = useQueryClient();

  const { data: selectedRecipes = [] } = useQuery<Recipe[]>({
    queryKey: ['selectedRecipes'],
    queryFn: async (): Promise<Recipe[]> => {
      const cached = queryClient.getQueryData<Recipe[]>(['selectedRecipes']) || [];
      return Promise.resolve(cached);
    },
    initialData: [],
  });

  const addSelectedRecipe = (recipe: Recipe) => {
    const updatedRecipes = [...selectedRecipes, recipe];
    queryClient.setQueryData(['selectedRecipes'], updatedRecipes);
  };

  const removeSelectedRecipe = (idMeal: string) => {
    const updatedRecipes = selectedRecipes.filter((r) => r.idMeal !== idMeal);
    queryClient.setQueryData(['selectedRecipes'], updatedRecipes);
  };

  const toggleSelectedRecipe = (recipe: Recipe) => {
    const isSelected = selectedRecipes.some((r) => r.idMeal === recipe.idMeal);
    if (isSelected) {
      removeSelectedRecipe(recipe.idMeal);
    } else {
      addSelectedRecipe(recipe);
    }
  };

  const selectedRecipesCount = selectedRecipes.length;

  return {
    selectedRecipes,
    addSelectedRecipe,
    removeSelectedRecipe,
    toggleSelectedRecipe,
    selectedRecipesCount,
  };
};
