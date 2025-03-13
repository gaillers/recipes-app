"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useRecipeDetails } from "@/hooks";

export default function RecipeDetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const { data: recipe, isLoading, error } = useRecipeDetails(id);

    if (isLoading) return <div>Loading recipe details...</div>;
    if (error) return <div>Error loading recipe details</div>;
    if (!recipe) return <div>No recipe found</div>;

    const ingredients: { ingredient: string; measure: string }[] = [];
    for (let i = 1; i <= 20; i++) {
        const ing = recipe[`strIngredient${i}` as keyof typeof recipe];
        const measure = recipe[`strMeasure${i}` as keyof typeof recipe];
        if (!ing) break; 
        ingredients.push({
            ingredient: ing.toString(),
            measure: measure?.toString() || "",
        });
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full max-h-96 object-cover mb-4 rounded"
            />

            <p className="mb-2">
                <strong>Category:</strong> {recipe.strCategory}
            </p>
            <p className="mb-2">
                <strong>Area:</strong> {recipe.strArea}
            </p>
            <p className="mb-4">
                <strong>Instructions:</strong> {recipe.strInstructions}
            </p>

            {recipe.strYoutube && (
                <a
                    href={recipe.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Watch on YouTube
                </a>
            )}

            {ingredients.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border p-3 text-left">Ingredient</th>
                                    <th className="border p-3 text-left">Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ingredients.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="border p-3">{item.ingredient}</td>
                                        <td className="border p-3">{item.measure}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
