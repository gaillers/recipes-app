import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Recipe } from '@/types';

export const useRecipesList = () => {
    const queryClient = useQueryClient();

    const { mutate: toggleRecipe } = useMutation<Recipe[], Error, Recipe>({
        mutationFn: (recipe: Recipe) => {

            const selectedRecipes = queryClient.getQueryData<Recipe[]>(['selectedRecipes']) || [];
            const isSelected = selectedRecipes.some((r) => r.idMeal === recipe.idMeal);


            const updatedRecipes = isSelected
                ? selectedRecipes.filter((r) => r.idMeal !== recipe.idMeal)
                : [...selectedRecipes, recipe];

            return Promise.resolve(updatedRecipes);
        },
        onSuccess: (updatedRecipes) => {

            queryClient.setQueryData(['selectedRecipes'], updatedRecipes);
        },
    });

    const handleToggleRecipe = (recipe: Recipe) => {
        toggleRecipe(recipe);
    };

    const selectedRecipes = queryClient.getQueryData<Recipe[]>(['selectedRecipes']) || [];

    return {
        selectedRecipes,
        handleToggleRecipe,
    };
};
