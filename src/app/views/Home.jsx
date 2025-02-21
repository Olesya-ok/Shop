import ProductCard from "../components/ProductCard";
import {useProducts} from "../hooks/useProducts";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/Home.css";
import logo from "../../essets/qC02fVRBQUSRGS9NYCpHrA.webp"
import RecentlyViewed from "../../app/components/RecentlyViewed";
import {Menu, MenuItem} from "@mui/material";

function Home({selectedCategory, onCategoryChange}) {
    const navigate = useNavigate();
    const [sortOrder, setSortOrder] = useState("default");
    const {filteredProducts} = useProducts(selectedCategory, sortOrder);
    const [visibleProducts, setVisibleProducts] = useState(8);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
        navigate("/");
    };

    const showMoreProducts = () => {
        setVisibleProducts((prev) => prev + 8);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
        handleClose();
    };

    return (
        <div className="Home">
            <div className="recently-vieweds">
                <p>Products you liked</p>
                <RecentlyViewed/>

            </div>
            <div className="category-and-buttons">
                <div className="category-buttons">
                    <div>

                        <div>
                            <button className="button-sort" onClick={handleMenuClick}>Sort By</button>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',  // Измените на 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',   // Измените на 'left'
                                }}
                                PaperProps={{
                                    style: {
                                        backgroundColor: '#6ec6f6', // Ваш цвет фона
                                        color: '#ffffff', // Ваш цвет текста
                                    },
                                }}
                            >
                                <MenuItem onClick={() => handleSortOrderChange("default")}>Default</MenuItem>
                                <MenuItem onClick={() => handleSortOrderChange("asc")}>Ascending</MenuItem>
                                <MenuItem onClick={() => handleSortOrderChange("desc")}>Descending</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleCategoryClick('')}>
                            <img src={logo} alt="All Categories"/>
                        </button>
                        <span>All</span>
                    </div>
                    <div>
                        <button onClick={() => handleCategoryClick("men's clothing")}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa8DHo8DVmnrLndrtgXgnL94JugLmTOU2Dsg&s"
                                alt="Men's Clothing"/>
                        </button>
                        <span>Men's </span>
                    </div>
                    <div>
                        <button onClick={() => handleCategoryClick("women's clothing")}>
                            <img
                                src="https://img.freepik.com/premium-photo/girl-warm-light-coat-white-background-model-outerwear-brunette-long-beige-coat-beautiful-girl-casual-coat-spring-autumn-collection-portrait-brunette-coat-full-growth_215842-384.jpg"
                                alt="Women's Clothing"/>
                        </button>
                        <span>Women's</span>
                    </div>
                    <div>
                        <button onClick={() => handleCategoryClick('electronics')}>
                            <img src="https://ae04.alicdn.com/kf/Se58f84e5a45e40baaa34372196da9d31c.jpg"
                                 alt="Electronics"/>
                        </button>
                        <span>Electronics</span>
                    </div>
                    <div>
                        <button onClick={() => handleCategoryClick('jewelery')}>
                            <img src="https://u-news.com.ua/uploads/posts/2020-03/1585631603_5.jpg" alt="Jewelery"/>
                        </button>
                        <span>Jewelery</span>
                    </div>
                </div>

                <div className="product-list">
                    {filteredProducts.slice(0, visibleProducts).map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            {visibleProducts < filteredProducts.length && (
                <button className="button-see-more" onClick={showMoreProducts}>See More</button>
            )}
        </div>
    );
}

export default Home;





