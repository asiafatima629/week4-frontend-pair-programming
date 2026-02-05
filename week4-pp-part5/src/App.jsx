
import React, { useState } from "react";
import "./App.css";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleIngredientsChange(event) {
    setIngredients(event.target.value);
  }

  function addRecipe() {
    if (name.trim() !== "" && ingredients.trim() !== "") {
      setRecipes((r) => [...r, { name, ingredients }]);
      setName("");
      setIngredients("");
    }
  }

  function deleteRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  return (
    <div className="app-container">
      <h1>Recipe Manager</h1>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter recipe name..."
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />
        <textarea
          placeholder="Enter ingredients (one per line)..."
          value={ingredients}
          onChange={handleIngredientsChange}
          className="input-field"
          rows="4"
        ></textarea>
        <button onClick={addRecipe} className="add-button">
          Add Recipe
        </button>
      </div>

      <div className="recipes-section">
        <h2>Your Recipes ({recipes.length})</h2>
        {recipes.length === 0 ? (
          <p className="empty-message">No recipes yet. Add your first recipe above!</p>
        ) : (
          <ol className="recipes-list">
            {recipes.map((recipe, index) => (
              <li key={index} className="recipe-item">
                <div className="recipe-name">{recipe.name}</div>
                <div className="recipe-ingredients">
                  {recipe.ingredients.replace(/\n/g, ", ")}
                </div>
                <button
                  onClick={() => deleteRecipe(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default RecipeManager;