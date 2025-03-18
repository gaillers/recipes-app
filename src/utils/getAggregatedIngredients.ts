import { Recipe } from "@/types";

export const getAggregatedIngredients = (
    recipes: Recipe[]
): { ingredient: string; measure: string }[] => {

    const aggregatedMap = recipes.reduce((map, recipe) => {
        return Object.keys(recipe).reduce((innerMap, key) => {
            if (key.startsWith("strIngredient")) {
                const ingredient = String(recipe[key as keyof Recipe]).trim();
                if (ingredient) {
                    const index = key.replace("strIngredient", "");
                    const measureKey = `strMeasure${index}`;
                    const measure = String(recipe[measureKey as keyof Recipe] || "").trim();
                    if (innerMap.has(ingredient)) {
                        innerMap.set(ingredient, [...innerMap.get(ingredient)!, measure]);
                    } else {
                        innerMap.set(ingredient, [measure]);
                    }
                }
            }
            return innerMap;
        }, map);
    }, new Map<string, string[]>());

    return Array.from(aggregatedMap.entries()).map(([ingredient, measures]) => ({
        ingredient,
        measure: measures.join(" + "),
    }));
}
