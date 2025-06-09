import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();


  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to RecipeHub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your culinary journey begins here. Discover, create, and share amazing recipes with food lovers around the world.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-orange-200">
            <svg className="w-8 h-8 text-orange-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Create Recipes</h3>
          <p className="text-gray-600">Share your culinary creations with detailed ingredients and step-by-step instructions.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-orange-200">
            <svg className="w-8 h-8 text-orange-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Discover Recipes</h3>
          <p className="text-gray-600">Explore a diverse collection of recipes from breakfast to dinner and everything in between.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-orange-200">
            <svg className="w-8 h-8 text-orange-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Join Community</h3>
          <p className="text-gray-600">Connect with fellow food enthusiasts and share your passion for cooking.</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative h-96 rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Cooking"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 transition-opacity duration-300 group-hover:opacity-90">
            <p className="text-white text-lg font-medium transform transition-transform duration-300 group-hover:translate-y-[-4px]">Professional Chefs</p>
          </div>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Food"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 transition-opacity duration-300 group-hover:opacity-90">
            <p className="text-white text-lg font-medium transform transition-transform duration-300 group-hover:translate-y-[-4px]">Delicious Recipes</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At RecipeHub, we believe that cooking is more than just preparing food—it's about creating memories, 
          sharing experiences, and bringing people together. Our platform is designed to inspire both novice 
          cooks and experienced chefs to explore new flavors, techniques, and cuisines.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
        <div className="text-center transition-all duration-300 hover:scale-105">
          <h3 className="text-4xl font-bold text-orange-600 mb-2 transition-colors duration-300 hover:text-orange-700">10K+</h3>
          <p className="text-gray-600">Active Users</p>
        </div>
        <div className="text-center transition-all duration-300 hover:scale-105">
          <h3 className="text-4xl font-bold text-orange-600 mb-2 transition-colors duration-300 hover:text-orange-700">5K+</h3>
          <p className="text-gray-600">Recipes Shared</p>
        </div>
        <div className="text-center transition-all duration-300 hover:scale-105">
          <h3 className="text-4xl font-bold text-orange-600 mb-2 transition-colors duration-300 hover:text-orange-700">50+</h3>
          <p className="text-gray-600">Countries</p>
        </div>
        <div className="text-center transition-all duration-300 hover:scale-105">
          <h3 className="text-4xl font-bold text-orange-600 mb-2 transition-colors duration-300 hover:text-orange-700">4.8</h3>
          <p className="text-gray-600">User Rating</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-200">
                <span className="text-orange-600 font-semibold">JD</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <p className="text-gray-600 text-sm">Home Chef</p>
              </div>
            </div>
            <p className="text-gray-600">"RecipeHub has transformed my cooking journey. The community is amazing and the recipes are always spot on!"</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-200">
                <span className="text-orange-600 font-semibold">MS</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Maria Smith</h4>
                <p className="text-gray-600 text-sm">Professional Chef</p>
              </div>
            </div>
            <p className="text-gray-600">"As a professional chef, I love sharing my recipes here. The platform is intuitive and the feedback is invaluable."</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-200">
                <span className="text-orange-600 font-semibold">RJ</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Robert Johnson</h4>
                <p className="text-gray-600 text-sm">Food Blogger</p>
              </div>
            </div>
            <p className="text-gray-600">"The variety of recipes and the ease of sharing make RecipeHub my go-to platform for culinary inspiration."</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-orange-600 rounded-2xl p-12 text-center text-white transition-all duration-300 hover:bg-orange-700">
        <h2 className="text-3xl font-bold mb-4">Join Our Culinary Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start sharing your recipes, discovering new dishes, and connecting with food lovers from around the world.
        </p>
        <button 
          onClick={() => navigate('/create-recipes')}
          className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-orange-50 hover:scale-105 active:scale-95"
        >
          Create Your Recipe
        </button>
      </div>
    </div>
  );
};

export default About;