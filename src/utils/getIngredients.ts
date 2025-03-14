import { Recipe } from "@/types";

export function getIngredients(recipe: Recipe): { ingredient: string; measure: string }[] {
    const ingredients: { ingredient: string; measure: string }[] = [];
    for (let i = 1; i <= 20; i++) {
        const ing = recipe[`strIngredient${i}` as keyof Recipe];
        const measure = recipe[`strMeasure${i}` as keyof Recipe];
        if (!ing || ing.toString().trim() === "") break;
        ingredients.push({
            ingredient: ing.toString().trim(),
            measure: measure?.toString().trim() || "",
        });
    }
    return ingredients;
}
