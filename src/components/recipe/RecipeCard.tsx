import React from 'react';
import { Recipe } from '@/types';

import { useSelectedRecipes } from '@/hooks';
import Link from 'next/link';

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe;

    const { selectedRecipes, toggleSelectedRecipe } = useSelectedRecipes();
    const isSelected = selectedRecipes.some((r) => r.idMeal === recipe.idMeal);

    return (
        <div
            className="border rounded p-2 hover:shadow-md transition-shadow"

        >
            <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-lg">{strMeal}</h3>
            <p>Category: {strCategory}</p>
            <p>Area: {strArea}</p>
            <div className="flex gap-2 mt-2">
                <Link
                    href={`/recipe/${idMeal}`}
                    className="px-3 py-1 border rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                    Details
                </Link>

              
                <button
                    onClick={() => {
                        toggleSelectedRecipe(recipe);
                    }}
                    className="px-3 py-1 cursor-pointer border rounded bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                >
                    {isSelected ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </div>
    );
};
