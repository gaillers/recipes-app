"use client";

import React from "react";
import Link from "next/link";
import { useSelectedRecipes } from "@/hooks/useSelectedRecipes";
import { RecipeDetails } from "@/components/recipe/RecipeDetails";
import { Recipe } from "@/types";

function getAggregatedIngredients(recipes: Recipe[]) {
    const aggregated: Record<string, string[]> = {};

    for (const recipe of recipes) {
        for (let i = 1; i <= 20; i++) {
            const ing = recipe[`strIngredient${i}` as keyof Recipe];
            const measure = recipe[`strMeasure${i}` as keyof Recipe];
            if (!ing) break;

            const ingName = ing.toString().trim();
            const measureStr = measure?.toString().trim() || "";

            if (!aggregated[ingName]) {
                aggregated[ingName] = [];
            }
            aggregated[ingName].push(measureStr);
        }
    }

    return Object.entries(aggregated).map(([ingredient, measures]) => ({
        ingredient,
        measure: measures.join(" + "),
    }));
}

export default function FavoritesPage() {
    const { selectedRecipes, removeSelectedRecipe } = useSelectedRecipes();

    if (selectedRecipes.length === 0) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">Favorites</h1>
                <p className="text-lg">No recipes in favorites</p>
            </div>
        );
    }

    const aggregatedIngredients = getAggregatedIngredients(selectedRecipes);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Selected Recipes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {selectedRecipes.map((recipe) => (
                    <div
                        key={recipe.idMeal}
                        className="border border-gray-300 rounded shadow-lg p-4 bg-white"
                    >
                        <div className="flex justify-end gap-3 mb-4">
                            <Link
                                href={`/recipe/${recipe.idMeal}`}
                                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                            >
                                Details
                            </Link>
                            <button
                                onClick={() => removeSelectedRecipe(recipe.idMeal)}
                                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                        <RecipeDetails recipe={recipe} />

                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-3 text-center">
                Aggregated Ingredients
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-3 text-left">Ingredient</th>
                            <th className="border p-3 text-left">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aggregatedIngredients.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="border p-3">{item.ingredient}</td>
                                <td className="border p-3">{item.measure}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
