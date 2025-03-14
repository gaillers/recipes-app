import { Recipe } from "@/types";

export const getAggregatedIngredients = (
    recipes: Recipe[]
): { ingredient: string; measure: string }[] => {

    const allIngredients = recipes.flatMap((recipe) =>
        Array.from({ length: 20 }, (_, i) => i + 1)
            .filter((i) => {
                const ing = recipe[`strIngredient${i}` as keyof Recipe];
                return Boolean(ing && ing.toString().trim().length);
            })
            .map((i) => ({
                ingredient: recipe[`strIngredient${i}` as keyof Recipe]!.toString().trim(),
                measure: (recipe[`strMeasure${i}` as keyof Recipe] || "").toString().trim(),
            }))
    );

    const aggregated = allIngredients.reduce((acc, { ingredient, measure }) => {
        return { ...acc, [ingredient]: [...(acc[ingredient] || []), measure] };
    }, {} as Record<string, string[]>);

    return Object.entries(aggregated).map(([ingredient, measures]) => ({
        ingredient,
        measure: measures.join(" + "),
    }));
}
