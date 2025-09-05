import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/RecipeInfo.css';
import NavBar from '../Components/NavBar';

function RecipeInfo() {
    const location = useLocation();
    const { recipe } = location.state;

    if (!recipe) {
        return <div>Recipe not found or data is missing. Please go back and select a recipe.</div>;
    }

    const ingredientsList = recipe.extendedIngredients.map(ingredient => 
        `${ingredient.name} (${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong})`
    ).join(' - ');

    return (
        <div><NavBar />
        <div className="recipe-info-container">
            
            <h1>{recipe.title}</h1>
            
            <img src={recipe.image} alt={recipe.title} className="recipe-info-image" />
            
            <div className="recipe-meta-details">
                <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
                <p><strong>Vegetarian:</strong> {recipe.vegetarian ? 'Yes' : 'No'}</p>
            </div>

            <div className="recipe-section">
                <h2>Ingredients</h2>
                <p>{ingredientsList}</p>
            </div>

            <div className="recipe-section">
                <h2>Instructions</h2>
                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
        </div>
        </div>
    );
}

export default RecipeInfo;