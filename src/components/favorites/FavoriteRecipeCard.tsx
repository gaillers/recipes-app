import Image from "next/image";

import { Recipe } from "@/types";
import { DetailsLink } from "@/components/ui/buttons/DetailsLink";
import { RemoveFavoriteButton } from "@/components/ui/buttons/RemoveFavoriteButton";

interface FavoriteRecipeCardProps {
    recipe: Recipe;
    onRemove: (idMeal: string) => void;
}

export const FavoriteRecipeCard: React.FC<FavoriteRecipeCardProps> = ({
    recipe,
    onRemove,
}) => {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow p-4">
            <div className="relative h-48 mb-4">
                <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    fill
                    className="object-cover rounded"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">{recipe.strMeal}</h3>
            <p className="text-gray-600 text-sm mb-1">
                <strong>Category:</strong> {recipe.strCategory}
            </p>
            <p className="text-gray-600 text-sm mb-3">
                <strong>Area:</strong> {recipe.strArea}
            </p>
            <div className="flex justify-between">
                <DetailsLink 
                    href={`/recipe/${recipe.idMeal}`} 
                    name={"Details"} 
                />
                <RemoveFavoriteButton 
                    onRemove={() => onRemove(recipe.idMeal)} 
                />
            </div>
        </div>
    );
};
