import React from 'react';
import FeaturedRecipe from './FeaturedRecipe';
import DefaultRecipeRender from './DefaultRecipeRender';

const RecipesSection = () => {
  return (
    <>
      {/* Featured Recipes Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedRecipe />
        </div>
      </section>

      {/* All Recipes Section */}
      <section id="recipes-section" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DefaultRecipeRender />
        </div>
      </section>
    </>
  );
};

export default RecipesSection; 