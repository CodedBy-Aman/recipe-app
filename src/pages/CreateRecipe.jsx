import nanoId from "nano-id";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const { recipe, setRecipe } = useContext(RecipeContext);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ingredientSubmitHandler = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const submitHandler = (data) => {
    data.id = nanoId();
    data.ingredients = ingredients;
    setRecipe([...recipe, data]);
    toast.success("Recipe Created Successfully! 🎉");
    reset();
    setIngredients([]);
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center">
          Create Recipe
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
            {/* Title and Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title
                </label>
                <input
                  {...register("title", { required: "Title is required" })}
                  placeholder="Recipe Title"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Category
                </label>
                <select
                  {...register("category", { required: "Category is required" })}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="">Select Category</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Snack">Snack</option>
                  <option value="Drink">Drink</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
                )}
              </div>
            </div>

            {/* Image URL and Chef Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  {...register("image")}
                  placeholder="Paste image URL here"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Chef Name
                </label>
                <input
                  {...register("chef")}
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ingredients
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  placeholder="Add ingredient"
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
                <button
                  type="button"
                  onClick={ingredientSubmitHandler}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Add
                </button>
              </div>
              
              {ingredients.length > 0 && (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 border border-gray-200"
                    >
                      <span className="text-gray-700">{ingredient}</span>
                      <button
                        type="button"
                        onClick={() => removeIngredient(index)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Instructions
              </label>
              <textarea
                {...register("instructions", { required: "Instructions are required" })}
                placeholder="Write the steps here..."
                rows="4"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none"
              ></textarea>
              {errors.instructions && (
                <p className="mt-1 text-sm text-red-500">{errors.instructions.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg"
              >
                Create Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;

//Title (text)

// Image URL (text)

// Category (dropdown or tags)

// Ingredients (array → input + add button)

// Instructions (textarea)

// Chef Name (optional)

// Submit Button
