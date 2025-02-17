import logo from '../../essets/qC02fVRBQUSRGS9NYCpHrA.webp';
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Header.css';
import "../../App.css"
import React from "react";

function Header({ onCategoryChange }) {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
        navigate("/");
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <nav>
                <ul>
                    <li className="categories">
                        <span>Categories</span>
                        <ul className="dropdown">
                            <li><button onClick={() => handleCategoryClick('')}>All Categories</button></li>
                            <li><button onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button></li>
                            <li><button onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</button></li>
                            <li><button onClick={() => handleCategoryClick('electronics')}>Electronics</button></li>
                            <li><button onClick={() => handleCategoryClick('jewelery')}>Jewelery</button></li>
                        </ul>
                    </li>
                    <li><Link to="/">Product</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/auth">Auth</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;


