import logo from '../../essets/qC02fVRBQUSRGS9NYCpHrA.webp';
import { Link } from "react-router-dom";
import '../../styles/Header.css';
import React from "react";

function Header({onCategoryChange }) {
    return (
        <div className="Header">
            <div>
                <img src={logo} alt="logo" />
            </div>

            <nav>
                <ul>
                    <li className="categories">
                        Categories
                        <ul className="dropdown">
                            <li><button onClick={() => onCategoryChange('')}>All Categories</button></li>
                            <li><button onClick={() => onCategoryChange("men's clothing")}>Men's Clothing</button></li>
                            <li><button onClick={() => onCategoryChange("women's clothing")}>Women's Clothing</button></li>
                            <li><button onClick={() => onCategoryChange('electronics')}>Electronics</button></li>
                            <li><button onClick={() => onCategoryChange('jewelery')}>Jewelery</button></li>
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
