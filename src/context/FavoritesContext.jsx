import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    return storedFavs;
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipe) => {
    if (!favorites.find((f) => f.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFromFavorites = (recipeId) => {
    setFavorites(favorites.filter((f) => f.id !== recipeId));
  };

  const isFavorite = (recipeId) => {
    return favorites.some((f) => f.id === recipeId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}; 