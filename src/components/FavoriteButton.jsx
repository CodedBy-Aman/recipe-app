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
    <i
      onClick={handleClick}
      className={`absolute top-4 right-4 text-3xl text-red-500 cursor-pointer hover:scale-110 transition-transform ${
        isFavorite(recipe.id) ? 'ri-heart-fill' : 'ri-heart-line'
      }`}
    ></i>
  );
};

export default FavoriteButton; 