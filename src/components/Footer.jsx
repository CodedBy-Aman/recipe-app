import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-extrabold text-red-500 mb-4">Recipe Hub</h3>
            <p className="text-gray-600">Discover and share your favorite recipes with our community.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/recipes" className="text-gray-600 hover:text-orange-500 transition-colors">Recipes</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Recipe Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 