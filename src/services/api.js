const API_KEY = "{// Add your Spoonacular API key here}";
const BASE_URL = "https://api.spoonacular.com/recipes";
const recipes_number = 24;

export const GetRecipes = async () => {
    const response = await fetch(`${BASE_URL}/random?apiKey=${API_KEY}&number=${recipes_number}`);
    const data = await response.json();
    return data.recipes || [];
};

export const SearchRecipes = async (query) => {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results || [];
};
