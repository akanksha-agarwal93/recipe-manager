type Recipe = {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: RecipeCategory;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: RecipeDifficulty;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags: string[];
  dietaryLabels: string[];
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
};

type Ingredient = {
  id: string;
  quantity: string;
  unit?: string;
  name: string;
};

type Instruction = {
  id: string;
  description: string;
};

type RecipeCategory =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "dessert"
  | "drink";
  
type RecipeDifficulty = "easy" | "medium" | "hard";