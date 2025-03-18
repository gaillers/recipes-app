export interface Recipe {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;

    [key: `strIngredient${number}`]: string | undefined;
    [key: `strMeasure${number}`]: string | undefined;
}

export interface RecipeCardProps {
    recipe: Recipe;
}

export interface UseFilteredRecipesParams {
    recipes: Recipe[] | undefined;
    selectedCategory: string;
    currentPage: number;
    recipesPerPage?: number;
}