
import React from 'react';
import { Recipe } from '@/types';
import { RecipeCard } from './RecipeCard';

interface RecipeListProps {
    recipes: Recipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    if (!recipes || recipes.length === 0) {
        return <div>No recipes found</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
        </div>
    );
};
