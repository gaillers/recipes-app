"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useRecipeDetails } from "@/hooks";
import { getIngredients } from "@/utils";

import { RecipeIngredients } from "@/components/recipe/RecipeIngredients";

export default function RecipeDetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const { data: recipe, isLoading, error } = useRecipeDetails(id);

    if (isLoading)
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-700">
                Loading recipe details...
            </div>
        );
    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-700">
                Error loading recipe details
            </div>
        );
    if (!recipe)
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-700">
                No recipe found
            </div>
        );

    const ingredients = getIngredients({ ...recipe, idMeal: id });

    return (
        <main className="min-h-screen bg-gray-100 text-gray-900">
            <section className="min-h-screen bg-gray-100 text-gray-900">
                <div className="container mx-auto p-8 pb-20">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>

                        <Image
                            src={recipe.strMealThumb}
                            width={700}
                            height={700}
                            alt={recipe.strMeal}
                            className="object-cover mb-4 rounded"
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

                    </div>

                    <RecipeIngredients ingredients={ingredients} />

                </div>
            </section>
        </main>
    );
}
