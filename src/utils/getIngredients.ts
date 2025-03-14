import { Recipe } from "@/types";

export function getIngredients(recipe: Recipe): { ingredient: string; measure: string }[] {
    const trim = (value: unknown): string => String(value ?? "").trim();
    const indices = Array.from({ length: 20 }, (_, i) => i + 1);

    const { ingredients } = indices.reduce(
        (acc, i) => {
            if (acc.stop) return acc;

            const ingredient = trim(recipe[`strIngredient${i}` as keyof Recipe]);

            if (!ingredient) return { ...acc, stop: true };

            acc.ingredients.push({
                ingredient,
                measure: trim(recipe[`strMeasure${i}` as keyof Recipe]),
            });
            
            return acc;
        },
        { ingredients: [] as { ingredient: string; measure: string }[], stop: false }
    );

    return ingredients;
}
