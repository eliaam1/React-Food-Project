import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Search from './pages/Search';
import RecipeInfo from './pages/RecipeInfo'; 

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/recipe/:id" element={<RecipeInfo />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;