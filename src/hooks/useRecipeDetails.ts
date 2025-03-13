import { useQuery } from '@tanstack/react-query';
import { RecipeDetailsProps, Ingredient } from '@/types';
import { fetchRecipeDetails } from '@/services/api';

export const useRecipeDetails = (id: string | undefined) => {
  return useQuery<RecipeDetailsProps['recipe'] | null, Error>({
    queryKey: ['recipeDetails', id],
    queryFn: async () => {
      const data = await fetchRecipeDetails(id!);
      if (!data) return null;

      const ingredients: Ingredient[] = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = data[`strIngredient${i}`];
        const measure = data[`strMeasure${i}`];
        if (!ingredient) break;
        ingredients.push({
          name: ingredient,
          measure: measure || '',
        });
      }

      return {
        ...data,
        ingredients,
      };
    },
    enabled: !!id,
  });
};
