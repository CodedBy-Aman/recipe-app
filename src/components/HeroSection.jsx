import React from 'react';

const HeroSection = ({ onExploreClick }) => {
  return (
    <section className="relative py-20 ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Culinary background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Discover Delicious</span>
            <span className="block text-orange-500">Recipes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto font-normal text-base text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore our collection of mouth-watering recipes from around the world.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow-lg">
              <button
                onClick={onExploreClick}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 