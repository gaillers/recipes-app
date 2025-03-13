"use client";

import React, { useState } from "react";

import { SearchBar } from "@/components/search/SearchBar";
import { CategoryFilterRecipe } from "@/components/filter/CategoryFilter";
import { RecipeList } from "@/components/recipe/RecipeList";
import { Pagination } from "@/components/pagination/Pagination";

import { useRecipes } from "@/hooks/useRecipes";
import { useDebounce } from "@/hooks/useDebounce";


export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search, 500);

  const { data: recipes, isLoading, error } = useRecipes(debouncedSearch);

  const filteredRecipes = selectedCategory
    ? recipes?.filter((recipe) => recipe.strCategory === selectedCategory)
    : recipes;

  const recipesPerPage = 2;
  const totalRecipes = filteredRecipes?.length || 0;
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const paginatedRecipes = filteredRecipes?.slice(startIndex, startIndex + recipesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-orange-400 to-red-400 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Modern Recipes
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="w-full md:w-1/2">
            <SearchBar
              search={search}
              onSearchChange={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <CategoryFilterRecipe
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              categories={[]} 
            />
          </div>
        </div>

        <div className="bg-white text-gray-900 rounded-lg shadow-xl p-8">
          {isLoading && (
            <div className="text-center py-8 text-xl">Loading recipes...</div>
          )}
          {error && (
            <div className="text-center py-8 text-xl">Error loading recipes</div>
          )}
          {paginatedRecipes && <RecipeList recipes={paginatedRecipes} />}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </main>
  );
}
