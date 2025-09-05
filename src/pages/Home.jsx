import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import '../css/Home.css';
import RecipeCard from '../Components/RecipeCard';
import { GetRecipes } from '../services/api';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSelectedRecipes = async () => {
            try {
                const selectedRecipes = await GetRecipes();
                setRecipes(selectedRecipes);
            } catch (err) {
                console.log(err);
                setError("Failed To Load Recipes ...");
            } finally {
                setLoading(false);
            }
        };
        loadSelectedRecipes();
    }, []);

    return (
        <div className='home'>
            <div className="hero-wrapper">
                <NavBar />
                <header className="app-header">
                    <div className="hero-content">
                        <h1>Find Your Best Recipe</h1>
                        <p>Discover amazing dishes from around the world</p>
                        <Link to="/search" className="hero-button">Search Recipes</Link>
                    </div>
                </header>
            </div>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading ...</div>
            ) : (
                <div className="recipes-section">
                    <h2 className="section-title">Featured Recipes</h2>
                    <div className="recipes-grid">
                        {recipes.map((recipe) => (
                            <RecipeCard recipe={recipe} key={recipe.id} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;