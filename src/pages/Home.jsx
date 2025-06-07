import React from 'react';
import HeroSection from '../components/HeroSection';
import RecipesSection from '../components/RecipesSection';

const Home = () => {
  const scrollToRecipes = () => {
    const recipesSection = document.getElementById('recipes-section');
    if (recipesSection) {
      recipesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12">
      <HeroSection onExploreClick={scrollToRecipes} />
      <RecipesSection />
    </div>
  );
};

export default Home;