"use client";

import { useMemo } from "react";

import { useSelectedRecipes } from "@/hooks";
import { getAggregatedIngredients } from "@/utils";

import { FavoriteRecipeCard } from "@/components/favorites/FavoriteRecipeCard";
import { AggregatedIngredients } from "@/components/favorites/AggregatedIngredients";
import { EmptyFavorites } from "@/components/favorites/EmptyFavorites";

export const HeroFavoritesContent: React.FC = () => {
    const { selectedRecipes, removeSelectedRecipe } = useSelectedRecipes();

    const aggregatedIngredients = useMemo(() =>
        getAggregatedIngredients(selectedRecipes),
        [selectedRecipes]
    );

    if (selectedRecipes.length === 0) {
        return <EmptyFavorites />;
    }

    return (
        <section className="min-h-screen bg-gray-100 text-gray-900">
            <div className="container mx-auto px-4 sm:px-8 py-8 pb-20">
                <h1 className="text-4xl font-markRegular text-center mb-10">
                    Selected Recipes
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {selectedRecipes.map((recipe) => (
                        <FavoriteRecipeCard
                            key={recipe.idMeal}
                            recipe={recipe}
                            onRemove={removeSelectedRecipe}
                        />
                    ))}
                </div>

                <AggregatedIngredients ingredients={aggregatedIngredients} />
            </div>
        </section>
    );
}
