const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRecipesBySearch = async (search: string) => {
  try {
    const res = await fetch(`${API_URL}/search.php?s=${search}`);
    
    if (!res.ok) {
      throw new Error('Error fetching recipes');
    }

    const data = await res.json();

    return data.meals || [];
  } catch (error) {
    console.error('fetchRecipesBySearch error:', error);
    throw error;
  }
};

export const fetchRecipeDetails = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/lookup.php?i=${id}`);
    
    if (!res.ok) {
      throw new Error('Error fetching recipe');
    }

    const data = await res.json();

    return data.meals?.[0] || null;
  } catch (error) {
    console.error('fetchRecipeDetails error:', error);
    throw error;
  }
};

export const fetchRecipeCategories = async () => {
  try {
    const res = await fetch(`${API_URL}/categories.php`);

    if (!res.ok) {
      throw new Error('Error fetching categories');
    }

    const data = await res.json();

    return data.categories.map((cat: any) => cat.strCategory);
  } catch (error) {
    console.error('fetchRecipeCategories error:', error);
    throw error;
  }
};
