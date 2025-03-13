import React from 'react';
import { Recipe } from '@/types';

interface RecipeDetailsProps {
  recipe: Recipe | null;
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  if (!recipe) {
    return <div>No recipe found</div>;
  }

  const ingredients: { ingredient: string; measure: string }[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
    const measure = recipe[`strMeasure${i}` as keyof Recipe];
    if (!ingredient) break;
    ingredients.push({
      ingredient: ingredient.toString(),
      measure: measure?.toString() || '',
    });
  }

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full max-w-md mb-4 rounded"
      />
      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {recipe.strArea}
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Ingredients:</h3>
      <ul className="list-disc list-inside">
        {ingredients.map((ing, idx) => (
          <li key={idx}>
            {ing.ingredient} – {ing.measure}
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4 mb-2">Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};
