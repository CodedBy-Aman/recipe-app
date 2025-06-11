import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoriteButton = ({ recipe }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (isFavorite(recipe.id)) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer"
    >
      <i
        className={`text-2xl transition-all duration-200 ${
          isFavorite(recipe.id) ? 'ri-heart-fill text-red-500 scale-125' : 'ri-heart-line text-red-500 scale-105'
        }`}
      ></i>
    </div>
  );
};

export default FavoriteButton; 