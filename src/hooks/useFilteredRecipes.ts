/**
 * useFilteredRecipes Hook
 *
 * Filters and paginates a list of recipes.
 *
 * @param {UseFilteredRecipesParams} recipes - Array of recipes or undefined if not loaded.
 * @param {string} selectedCategory - Category to filter recipes.
 * @param {number} currentPage - Current page for pagination.
 * @param {number} [recipesPerPage=2] - Number of recipes per page (default is 2).
 *
 * @returns {Object} An object containing:
 *   - filteredRecipes: The filtered list of recipes.
 *   - paginatedRecipes: The recipes for the current page.
 *   - totalRecipes: Total count of filtered recipes.
 *   - totalPages: Total number of pages.
 */

import { useMemo } from "react";
import { UseFilteredRecipesParams } from "@/types";
import { filterRecipes, paginateRecipes } from "@/utils";

export const useFilteredRecipes = ({
    recipes,
    selectedCategory,
    currentPage,
    recipesPerPage = 2,
}: UseFilteredRecipesParams) => {

    // Filter recipes based on selected category
    const filteredRecipes = useMemo(() => filterRecipes(recipes, selectedCategory), [selectedCategory, recipes]);

    const totalRecipes = filteredRecipes.length;
    const totalPages = Math.ceil(totalRecipes / recipesPerPage);

    // Paginate the filtered recipes
    const paginatedRecipes = useMemo(
        () => paginateRecipes(filteredRecipes, currentPage, recipesPerPage),
        [filteredRecipes, currentPage, recipesPerPage]
    );

    return { filteredRecipes, paginatedRecipes, totalRecipes, totalPages };
};
