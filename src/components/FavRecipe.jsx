import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FavRecipe = () => {
      const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();
const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleRecipeClick = (e, recipeId) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/recipes/${recipeId}`);
  };


const favRecipes = JSON.parse(localStorage.getItem("favorites")) || [];

 return (
    favRecipes.length !== 0 ? (
      <div className="py-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Favorite Recipes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {favRecipes.map((item, index) => {
            const isExpanded = expandedCard === index;

            return (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] ${
                  isExpanded ? "max-h-full" : "max-h-[400px]"
                }`}
              >
                <div onClick={(e) => handleRecipeClick(e, item.id)}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">
                      By {item.chef || "Unknown Chef"}
                    </span>
                    <button
                      onClick={() => toggleCard(item.id)}
                      className={`inline-block px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${
                        isExpanded
                          ? "bg-orange-100 text-orange-600 hover:bg-orange-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {isExpanded ? "Hide Details" : "View Recipe"}
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Ingredients:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {item.ingredients?.map((ing, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                              {ing}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Instructions:</h4>
                        <p className="text-sm leading-relaxed">
                          {item.instructions}
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
    ) : (
       <p className="text-center text-gray-500 text-lg mt-10">
    You haven’t added any favorite recipes yet.
  </p>
    )
  );
}

export default FavRecipe