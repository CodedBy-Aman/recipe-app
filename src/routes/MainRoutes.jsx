import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import CreateRecipe from "../pages/createRecipe";
import SingleRecipe from "../pages/SingleRecipe";
import DefaultRecipePage from "../pages/DefaultRecipePage";
import Favourites from "../pages/Favourites";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/recipes/:id" element={<SingleRecipe />}></Route>
      <Route path="/favourites" element={<Favourites />}></Route>
      <Route path="/default-recipe/:id" element={<DefaultRecipePage />}></Route>
      <Route path="/create-recipes" element={<CreateRecipe />}></Route>
    </Routes>
  );
};

export default MainRoutes;
