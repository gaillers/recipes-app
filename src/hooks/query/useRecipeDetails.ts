import { useQuery } from '@tanstack/react-query';
import { RecipeDetailsProps, Ingredient, Recipe } from '@/types';
import { fetchRecipeDetails } from '@/services/api';

export const useRecipeDetails = (id: string | undefined) => {
  return useQuery<RecipeDetailsProps['recipe'] | null, Error>({
    queryKey: ['recipeDetails', id],
    queryFn: async () => {
      if (!id) return null;

      const data = await fetchRecipeDetails(id);
      if (!data) return null;

      const ingredients: Ingredient[] = Object.keys(data)
        .filter((key) => key.startsWith("strIngredient"))
        .map((key) => {
          const ingredient = String(data[key as keyof Recipe]).trim();

          if (!ingredient) return null;

          const index = key.replace("strIngredient", "");
          const measureKey = `strMeasure${index}`;
          const measure = String(data[measureKey as keyof Recipe] || "").trim();
          
          return { name: ingredient, measure };
        })
        .filter((item): item is Ingredient => item !== null);

      return {
        ...data,
        ingredients,
      };
    },
    enabled: !!id,
  });
};
