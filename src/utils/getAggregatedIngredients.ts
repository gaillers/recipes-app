import { Recipe } from "@/types";

export const getAggregatedIngredients = (
    recipes: Recipe[]
): { ingredient: string; measure: string }[] => {
    const aggregated: Record<string, string[]> = {};

    for (const recipe of recipes) {
        for (let i = 1; i <= 20; i++) {
            const ing = recipe[`strIngredient${i}` as keyof Recipe];
            const measure = recipe[`strMeasure${i}` as keyof Recipe];
            if (!ing || ing.toString().trim() === "") break;

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
