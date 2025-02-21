import logo from '../../essets/qC02fVRBQUSRGS9NYCpHrA.webp';
import {Link, useNavigate} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Badge} from "@mui/material";
import {useCart} from "../hooks/useCart";
import '../../styles/Header.css';
import "../../App.css"
import React from "react";
import {Favorite} from "@mui/icons-material";
import {useFavorites} from "../hooks/useFavorites";

function Header({onCategoryChange, onAuthClick}) {
    const navigate = useNavigate();
    const {cartItems} = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const {favorites} = useFavorites();

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
        navigate("/");
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <nav>
                <ul>
                    <li className="categories">
                        <span>Categories</span>
                        <ul className="dropdown">
                            <li>
                                <button onClick={() => handleCategoryClick('')}>All Categories</button>
                            </li>
                            <li>
                                <button onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button>
                            </li>
                            <li>
                                <button onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleCategoryClick('electronics')}>Electronics</button>
                            </li>
                            <li>
                                <button onClick={() => handleCategoryClick('jewelery')}>Jewelery</button>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/">Product</Link></li>


                    <li onClick={onAuthClick}>Auth</li>
                    <li><Link to="/favorites">
                        <Badge
                            badgeContent={favorites.length}
                            color="primary"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Favorite/>
                        </Badge>
                        Favorite </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <Badge badgeContent={totalItems} color="primary">
                                <ShoppingCartIcon/>
                            </Badge>
                            Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;




