export interface RecipeCategory {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
  }
  