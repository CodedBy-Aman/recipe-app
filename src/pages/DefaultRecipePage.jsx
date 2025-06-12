import React, { useState, useEffect } from 'react'
import recipeData from '../components/DefaultRecipeData'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DefaultRecipePage = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    // Add favorites state management
    const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favs));
    }, [favs]);

    const favHandler = () => {
        if (!favs.find((f) => f.id === selectedRecipe.id)) {
            setFavs([...favs, selectedRecipe]);
        }
    };

    const unfavHandler = () => {
        const updatedFavs = favs.filter((f) => f.id !== selectedRecipe.id);
        setFavs(updatedFavs);
    };

    const selectedIndex = recipeData.findIndex(recipe => recipe.id === id);
    const selectedRecipe = recipeData.find(recipe => recipe.id === id);
    if (!selectedRecipe) {
        return (
            <div className="text-center mt-10 text-red-500 text-xl">
                Recipe not found.
            </div>
        );
    }

    const handleNext = () => {
        if (selectedIndex < recipeData.length - 1) {
            navigate(`/default-recipe/${recipeData[selectedIndex + 1].id}`)
        };
    }

    const handlePrevious = () => {
        if (selectedIndex > 0) {
            navigate(`/default-recipe/${recipeData[selectedIndex - 1].id}`)
        }
    };

    return (
        <>
            <div className="mt-15">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-3 border-b ">
                    {selectedRecipe?.title + " Recipe" || "Recipe Details"}
                </h2>
            </div>

            <div className={`my-10 grid gap-8 p-6`}>
                {/* Left Side - Recipe Display */}
                <div className="relative bg-white shadow p-6 rounded-lg w-full text-center">
                    {favs.find((f) => f.id === selectedRecipe.id) ? (
                        <i
                            onClick={unfavHandler}
                            className="absolute right-[5%] text-4xl text-red-500 ri-heart-fill"
                        ></i>
                    ) : (
                        <i
                            onClick={favHandler}
                            className="absolute right-[5%] text-4xl text-red-500 ri-heart-line"
                        ></i>
                    )}
                    <img
                        src={selectedRecipe.image}
                        alt={selectedRecipe.title}
                        className="w-1/2 m-auto  h-60 object-contain rounded"
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
                        <ul className="list-disc pl-5 text-md space-y-1 text-left text-gray-600">
                            {selectedRecipe.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <h4 className="mt-4 font-semibold text-xl text-gray-600">Instructions:</h4>
                    <p className="text-md text-gray-600">{selectedRecipe.instructions}</p>

                    <div className="mt-6 flex justify-center gap-4 flex-wrap">
                        {selectedIndex > 0 && (<button
                            onClick={handlePrevious}
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                        >
                            ← Previous
                        </button>)}

                        <button
                            onClick={() => navigate(-1)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Back
                        </button>
                        {selectedIndex < recipeData.length -1 && ( <button
                            onClick={handleNext}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Next →
                        </button>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DefaultRecipePage