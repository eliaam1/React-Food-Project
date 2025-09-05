import React, { useState } from 'react';
import '../css/Search.css';
import RecipeCard from '../Components/RecipeCard';
import { SearchRecipes } from '../services/api';

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitHandle = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        setLoading(true);
        try {
            const searchResults = await SearchRecipes(searchQuery);
            setRecipes(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search Recipes");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='search-page'>
            <form onSubmit={submitHandle} className='search-form'>
                <div className="search-container">
                    <input
                        type='text'
                        placeholder="Search for Recipes..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type='submit' className="search-button">Search</button>
                </div>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading ...</div>
            ) : (
                <>
                    <h2 className="section-title">Search Results</h2>
                    <div className="recipes-grid">
                        {recipes.map((recipe) => (
                            <RecipeCard recipe={recipe} key={recipe.id} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Search;