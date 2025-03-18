"use client";

import { useQueryParams } from "@/hooks";
import { useDebounce } from "@/hooks";
import { useRecipes } from "@/hooks";
import { useFilteredRecipes } from "@/hooks";

import { SearchBar } from "@/components/search/SearchBar";
import { CategoryFilterRecipe } from "@/components/filter/CategoryFilter";
import { RecipeList } from "@/components/recipe/RecipeList";
import { Pagination } from "@/components/pagination/Pagination";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { ErrorMessage } from "@/components/ui/status/ErrorMessage";

export const HeroHomeContent: React.FC = () => {
  const { searchParams, setQueryParam } = useQueryParams();

  const search = searchParams.get("search") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";
  const currentPage = Number(searchParams.get("page")) || 1;

  const debouncedSearch = useDebounce(search, 500);
  const { data: recipes, isLoading, error } = useRecipes(debouncedSearch);

  const { paginatedRecipes, totalPages } = useFilteredRecipes({
    recipes,
    selectedCategory,
    currentPage,
    recipesPerPage: 2,
  });

  return (
    <main className="main">
      <section className="min-h-screen bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4 sm:px-8 py-8 pb-20">
          <h1 className="text-4xl font-markRegular text-center mb-10">
            Modern Recipes
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="w-full md:w-1/2">
              <SearchBar
                search={search}
                onSearchChange={(value) => setQueryParam("search", value)}
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <CategoryFilterRecipe
                onCategoryChange={(value) => setQueryParam("category", value)}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-8">
            {isLoading && <Spinner />}

            {error && <ErrorMessage />}

            {paginatedRecipes &&
              <RecipeList
                recipes={paginatedRecipes}
              />
            }
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex justify-center">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) =>
                  page === 1 ? setQueryParam("page", "") : setQueryParam("page", String(page))
                }
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
