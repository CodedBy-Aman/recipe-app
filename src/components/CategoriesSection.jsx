import React from 'react';
import RecipeData from './DefaultRecipeData';

const CategoriesSection = ({ onCategorySelect }) => {
  // Get unique categories from recipes
  const categories = [...new Set(RecipeData.map(recipe => recipe.category))];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => onCategorySelect(null)}
          className="px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection; 