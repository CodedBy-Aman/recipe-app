import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">
              RecipeHub
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-orange-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div 
            ref={menuRef}
            className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent z-50 shadow-lg md:shadow-none rounded-lg md:rounded-none p-4 md:p-0`}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <NavLink 
                to="/" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `text-lg font-medium transition-all duration-300
                  ${isActive ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-600 hover:text-orange-600"}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `text-lg font-medium transition-all duration-300
                  ${isActive ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-600 hover:text-orange-600"}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/recipes" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `text-lg font-medium transition-all duration-300
                  ${isActive ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-600 hover:text-orange-600"}`
                }
              >
                Recipes
              </NavLink>
              <NavLink 
                to="/create-recipes" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `text-lg font-medium transition-all duration-300
                  ${isActive ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-600 hover:text-orange-600"}`
                }
              >
                Create Recipe
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
