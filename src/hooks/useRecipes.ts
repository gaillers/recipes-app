import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Recipe } from '@/types';
import { fetchRecipesBySearch } from '@/services/api';

export const useRecipes = (searchTerm: string) => {
    return useQuery<Recipe[], Error>({
        queryKey: ['recipes', searchTerm],
        queryFn: () => fetchRecipesBySearch(searchTerm),
        placeholderData: keepPreviousData,
    });
};
