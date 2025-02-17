import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

function Home({ selectedCategory, onCategoryChange }) {
    const navigate = useNavigate();
    const { filteredProducts } = useProducts(selectedCategory);
    const [visibleProducts, setVisibleProducts] = useState(9);

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
        navigate("/");
    };

    const showMoreProducts = () => {
        setVisibleProducts((prev) => prev + 9);
    };

    return (
        <div className="Home">
            {/* Дублирующее меню категорий */}
            <div className="category-buttons">
                <button onClick={() => handleCategoryClick('')}>All Categories</button>
                <button onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button>
                <button onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</button>
                <button onClick={() => handleCategoryClick('electronics')}>Electronics</button>
                <button onClick={() => handleCategoryClick('jewelery')}>Jewelery</button>
            </div>

            <div className="product-list">
                {filteredProducts.slice(0, visibleProducts).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Кнопка для загрузки дополнительных товаров */}
            {visibleProducts < filteredProducts.length && (
                <button className="button-see-more" onClick={showMoreProducts}>See More</button>
            )}
        </div>
    );
}

export default Home;





