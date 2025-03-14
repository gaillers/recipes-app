import { useQuery } from '@tanstack/react-query';
import { RecipeDetailsProps, Ingredient, Recipe } from '@/types';
import { fetchRecipeDetails } from '@/services/api';

export const useRecipeDetails = (id: string | undefined) => {
  return useQuery<RecipeDetailsProps['recipe'] | null, Error>({
    queryKey: ['recipeDetails', id],
    queryFn: async () => {
      const data = await fetchRecipeDetails(id!);
      if (!data) return null;

      const ingredients: Ingredient[] = Array.from({ length: 20 }, (_, i) => i + 1)
        .flatMap((i) => {
          const ing = data[`strIngredient${i}` as keyof Recipe];

          if (!ing || ing.toString().trim() === "") return [];

          return [
            {
              name: ing.toString().trim(),
              measure: (data[`strMeasure${i}` as keyof Recipe] || "").toString().trim(),
            },
          ];
        });

      return {
        ...data,
        ingredients,
      };
    },
    enabled: !!id,
  });
};
