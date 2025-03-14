"use client";

import React, { useState } from "react";

import { useRecipes } from "@/hooks";
import { useDebounce } from "@/hooks";

import { SearchBar } from "@/components/search/SearchBar";
import { CategoryFilterRecipe } from "@/components/filter/CategoryFilter";
import { RecipeList } from "@/components/recipe/RecipeList";
import { Pagination } from "@/components/pagination/Pagination";

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
    <main className="main">
      <section className="min-h-screen bg-gray-100 text-gray-900">
        <div className="container mx-auto p-8 pb-20">
          <h1 className="text-4xl font-markRegular text-center mb-10">
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

          <div className="bg-white rounded-lg shadow-xl p-8">
            {isLoading && (
              <div className="flex justify-center items-center py-8">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              </div>
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
      </section>
    </main>
  );
}
