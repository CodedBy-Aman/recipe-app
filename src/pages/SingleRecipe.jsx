import { useContext, useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { recipe, setRecipe } = useContext(RecipeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedRecipe = recipe.find((r) => r.id === id);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    title: selectedRecipe.title,
    image: selectedRecipe.image,
    category: selectedRecipe.category,
    chef: selectedRecipe.chef,
    ingredients: selectedRecipe.ingredients.join(", "),
    instructions: selectedRecipe.instructions,
  });

  const deleteHandler = () => {
    const updated = recipe.filter((r) => r.id !== id);
    setRecipe(updated);
    navigate("/recipes");
    toast.success("Recipe deleted!")
  };

  const updateHandler = () => {
    const updatedRecipe = {
      ...selectedRecipe,
      title: formData.title,
      image: formData.image,
      category: formData.category,
      chef: formData.chef,
      ingredients: formData.ingredients.split(",").map((ing) => ing.trim()),
      instructions: formData.instructions,
    };

    const updatedList = recipe.map((r) => (r.id === id ? updatedRecipe : r));
    setRecipe(updatedList);
    toast.success("Recipe updated!")
    setIsEditing(false);
  };

  // 👇 Scroll to form on edit
  useEffect(() => {
    if (isEditing && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isEditing]);

  return (
    <>
    <div className="mt-15">
  <h2 className="text-3xl font-bold text-center text-green-700 mb-3 border-b ">
    {selectedRecipe?.title + " Recipe" || "Recipe Details"}
  </h2>
</div>

    <div
      className={`my-10 grid gap-8 p-6 ${
        isEditing ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {/* Left Side - Recipe Display */}
      <div className=" relative bg-white shadow p-6 rounded-lg w-full text-center">

        <i class=" absolute right-[5%] text-4xl text-red-500 ri-heart-line"></i>
        <i class="absolute right-[5%] text-4xl text-red-500 ri-heart-fill"></i>
        <img
          src={selectedRecipe.image}
          alt={selectedRecipe.title}
          className="w-1/2 m-auto  h-60 object-cover rounded"
        />
        <h2 className="text-3xl font-bold mt-2 text-gray-600 mb-7 decoration underline ">{selectedRecipe.title}</h2>
        <p className="text-md text-gray-600">
          <strong>Chef:</strong> {selectedRecipe.chef}
        </p>
        <p className="text-md text-gray-600">
          <strong>Category:</strong> {selectedRecipe.category}
        </p>

        <h4 className="mt-4 font-semibold text-xl text-gray-600">Ingredients:</h4>
        <div className="flex justify-center">
  <ul className="list-disc list-inside pl-5 text-md space-y-1 text-left text-gray-600">
    {selectedRecipe.ingredients.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>

        <h4 className="mt-4 font-semibold text-xl text-gray-600">Instructions:</h4>
        <p className="text-md text-gray-600">{selectedRecipe.instructions}</p>

        <div className="w-full flex justify-center  gap-4 mt-6">
             <button
              onClick={() => navigate('/recipes')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              ← Back 
            </button>
          <button
            onClick={deleteHandler}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Right Side - Edit Form */}
     {isEditing && (
  <div
    ref={formRef}
    className="bg-white shadow p-6 rounded-lg text-gray-600"
  >
    <h3 className="text-xl font-semibold mb-4">Update Recipe</h3>

    <div className="space-y-4">
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title"
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        placeholder="Image URL"
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        value={formData.chef}
        onChange={(e) => setFormData({ ...formData, chef: e.target.value })}
        placeholder="Chef Name"
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        value={formData.ingredients}
        onChange={(e) =>
          setFormData({ ...formData, ingredients: e.target.value })
        }
        placeholder="Ingredients (comma separated)"
        className="w-full border p-2 rounded"
      />
      <textarea
        value={formData.instructions}
        onChange={(e) =>
          setFormData({ ...formData, instructions: e.target.value })
        }
        placeholder="Instructions"
        rows="4"
        className="w-full border p-2 rounded"
      ></textarea>
    </div>

    <div className="flex justify-center gap-4 mt-4">
    
      <button
        onClick={updateHandler}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Update Recipe
      </button>
      <button
        onClick={() => setIsEditing(false)}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
      >
        Cancel Edit
      </button>
    </div>
  </div>
)}

    </div>
    </>
  );
};

export default SingleRecipe;
