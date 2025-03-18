import { useQuery } from '@tanstack/react-query';
import { RecipeCategory } from '@/types';
import { fetchRecipeCategories } from '@/services/api';

export const useRecipeCategories = () => {
    return useQuery<RecipeCategory[], Error>({
        queryKey: ['categories'],
        queryFn: fetchRecipeCategories,
    });
};
