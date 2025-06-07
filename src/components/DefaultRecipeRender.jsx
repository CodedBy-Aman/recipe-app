import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeData from './DefaultRecipeData';
import CategoriesSection from './CategoriesSection';

const DefaultRecipeRender = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const filteredRecipes = selectedCategory
    ? RecipeData.filter(recipe => recipe.category === selectedCategory)
    : RecipeData;

  const handleRecipeClick = (recipeId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/default-recipe/${recipeId}`);
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <CategoriesSection onCategorySelect={setSelectedCategory} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => {
          const isExpanded = expandedCard === recipe.id;
          
          return (
            <div
              key={recipe.id}
              className={`group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                isExpanded ? 'max-h-full' : 'max-h-[60vh]'
              }`}
            >
              <div onClick={() => handleRecipeClick(recipe.id)}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{recipe.cookingTime}</span>
                    <span className="text-sm text-gray-500">{recipe.difficulty}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <div className="flex justify-start">
                  <button
                    onClick={() => toggleCard(recipe.id)}
                    className={`self-start inline-block px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      isExpanded
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    }`}
                  >
                    {isExpanded ? "Hide Details" : "View More"}
                  </button>
                </div>
                
                {isExpanded && (
                  <div className="space-y-3 mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Chef:</span>{" "}
                      {recipe.chef || "Unknown"}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Category:</span>{" "}
                      {recipe.category}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-600">
                        Ingredients:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {recipe.ingredients?.map((ing, i) => (
                          <li key={i}>{ing}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-600">
                        Instructions:
                      </h4>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">
                        {recipe.instructions}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DefaultRecipeRender;