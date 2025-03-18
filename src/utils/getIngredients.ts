import { Recipe } from "@/types";

export const getIngredients = (recipe: Recipe): { ingredient: string; measure: string }[] => {
    const trim = (value: unknown): string => String(value ?? "").trim();

    return Object.keys(recipe)
        .filter(key => key.startsWith("strIngredient"))
        .map(key => {
            const ingredient = trim(recipe[key as keyof Recipe]);
            const measureKey = "strMeasure" + key.slice("strIngredient".length);
            const measure = trim(recipe[measureKey as keyof Recipe]);
            return { ingredient, measure };
        })
        .filter(({ ingredient }) => ingredient !== "");
}
