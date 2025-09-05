import React from "react";
import { Link } from "react-router-dom";
import '../css/RecipeCard.css';

function RecipeCard({ recipe }) {
    return (
        <Link to={`/recipe/${recipe.id}`} state={{ recipe: recipe }} className="recipe-card-link">
            <div className="recipe-card">
                <div className="recipe-poster">
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="recipe-overlay">
                        <button className="view-recipe-btn">View Recipe</button>
                    </div>
                </div>
                <div className="recipe-content">
                    <h3 className="recipe-title">{recipe.title}</h3>
                </div>
            </div>
        </Link>
    );
}


export default RecipeCard;