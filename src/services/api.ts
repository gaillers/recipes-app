import { CategoryResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://www.themealdb.com/api/json/v1/1';

export const fetchRecipesBySearch = async (search: string) => {
  const res = await fetch(`${API_URL}/search.php?s=${search}`);

  if (!res.ok) throw new Error('Error fetching recipes');

  const data = await res.json();

  return data.meals || [];
};

export const fetchRecipeDetails = async (id: string) => {
  const res = await fetch(`${API_URL}/lookup.php?i=${id}`);

  if (!res.ok) throw new Error('Error fetching recipe');

  const data = await res.json();

  return data.meals?.[0] || null;
};


export const fetchRecipeCategories = async () => {
  const res = await fetch(`${API_URL}/categories.php`);

  if (!res.ok) throw new Error('Error fetching categories');

  const data = await res.json();

  return data.categories.map((cat: CategoryResponse) => cat.strCategory);
};
