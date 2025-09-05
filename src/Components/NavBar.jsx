import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <i className="fas fa-utensils"></i>
                    <h1>
  
  Delicious Recipes
</h1>

                </Link>
                <div className="nav-links">
                    <Link className='nav-link' to="/" >Home</Link>
                    <Link className='nav-link' to="/search">Search</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;