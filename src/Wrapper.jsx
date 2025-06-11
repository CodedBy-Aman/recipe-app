import { RecipeContext } from "./context/RecipeContext"
import { FavoritesProvider } from "./context/FavoritesContext"
import { useState, useEffect } from "react"

const Wrapper = (props) => {
  const [recipe, setRecipe] = useState(() => {
    // Initialize state from localStorage
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync to localStorage when recipe changes
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipe));
  }, [recipe]);

  return (
    <FavoritesProvider>
      <RecipeContext.Provider value={{recipe, setRecipe}}>
        {props.children}
      </RecipeContext.Provider>
    </FavoritesProvider>
  )
}

export default Wrapper