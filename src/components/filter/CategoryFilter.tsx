import React from 'react';
import { useRecipeCategories } from '@/hooks';

import { RecipeCategory } from '@/types';

export const CategoryFilterRecipe: React.FC<RecipeCategory> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const { data: categories, isLoading, error } = useRecipeCategories();

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div className='w-full'>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full p-2 border border-orange-300 rounded 
                   focus:outline-none focus:ring-2 focus:ring-orange-400 
                   transition-colors text-gray-900"
      >
        <option value="">All Categories</option>
        {Array.isArray(categories) && categories?.map((category) => (
          <option key={category.toString()} value={category.toString()}>
            {category.toString()}
          </option>
        ))}
      </select>
    </div>
  );
};
