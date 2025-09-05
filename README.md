# Delicious Recipes - React Food Project

A modern React application for discovering and exploring delicious recipes. Users can browse featured recipes, search for specific dishes, and view detailed cooking instructions.

## Features

- Browse featured recipes on the home page
- Search functionality to find specific recipes
- Detailed recipe pages with ingredients and instructions
- Responsive design for mobile and desktop
- Clean and intuitive user interface

## Technologies Used

- React.js
- React Router for navigation
- CSS3 for styling
- REST API integration for recipe data

## Project Structure

```
src/
├── Components/
│   ├── NavBar.jsx      # Navigation component
│   └── RecipeCard.jsx  # Recipe card component
├── pages/
│   ├── Home.jsx        # Home page with featured recipes
│   ├── Search.jsx      # Search page
│   └── RecipeInfo.jsx  # Detailed recipe page
├── css/
│   ├── App.css
│   ├── Home.css
│   ├── NavBar.css
│   ├── RecipeCard.css
│   ├── RecipeInfo.css
│   └── Search.css
├── services/
│   └── api.js          # API integration
├── App.jsx
└── main.jsx
```

## API Setup - Spoonacular
1-Create a Spoonacular Account
2- Visit Spoonacular's API Portal
3- Click "Get Started"
4- Select "Create Account" and fill in your details
5- Verify your email address
6- Get Your API Key

## Copy Your API key into [api.js]

## Getting Started

1. Clone the repository:
git clone [your-repository-url]

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

## Usage

- Visit the home page to see featured recipes
- Use the search page to find specific recipes
- Click on any recipe card to view detailed information
- Navigate using the top navigation bar

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)