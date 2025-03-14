import Image from 'next/image';

import { RecipeCardProps } from '@/types';
import { useSelectedRecipes } from '@/hooks';

import { FavoriteButton } from "@/components/ui/buttons/FavoriteButton";
import { DetailsLink } from "@/components/ui//buttons/DetailsLink";

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe;
    const { selectedRecipes, toggleSelectedRecipe } = useSelectedRecipes();
    const isSelected = selectedRecipes.some((r) => r.idMeal === recipe.idMeal);

    return (
        <div className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
            <div className="relative h-80">
                <Image
                    src={strMealThumb}
                    alt={strMeal}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{strMeal}</h3>
                <p className="text-gray-600 text-sm mb-1">
                    <strong>Category:</strong> {strCategory}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                    <strong>Area:</strong> {strArea}
                </p>
                <div className="flex justify-between items-center">
                    <DetailsLink href={`/recipe/${idMeal}`} name={"Details"} />
                    <FavoriteButton
                        isSelected={isSelected}
                        onToggle={() => toggleSelectedRecipe(recipe)}
                    />
                </div>
            </div>
        </div>
    );
};
