import { useRecipeCategories } from '@/hooks';
import { useQueryParams } from "@/hooks";
import { RecipeCategory } from '@/types';

export const CategoryFilterRecipe: React.FC<RecipeCategory> = ({
  // onCategoryChange,
}) => {
  const { searchParams, setQueryParam } = useQueryParams();
  const { data: categories, isLoading, error } = useRecipeCategories();
  const selectedCategory = searchParams.get("category") ?? "";

  if (isLoading)
    return (
      <div className="w-full animate-pulse">
        <select
          value=""
          disabled
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5"
        >
          <option>Loading categories...</option>
        </select>
      </div>
    );

  if (error) return <div>Error loading categories</div>;

  return (
    <div className="w-full">
      <select
        value={selectedCategory}
        onChange={(e) => {
          const newCategory = e.target.value;
          // onCategoryChange(newCategory);
          setQueryParam("category", newCategory);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-4 pl-4"
      >
        <option value="">All Categories</option>
        {Array.isArray(categories) &&
          categories.map((category) => (
            <option key={category.toString()} value={category.toString()}>
              {category.toString()}
            </option>
          ))}
      </select>
    </div>
  );
};
