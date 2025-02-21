import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import "../../styles/ProductPage.css";

function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { filteredProducts } = useProducts("");
    const { addItemToCart } = useCart();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = filteredProducts.find((item) => item.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            addToRecentlyViewed(foundProduct);
        } else {
            navigate("/");
        }
    }, [id, filteredProducts, navigate]);

    const addToRecentlyViewed = (newProduct) => {
        let viewedProducts = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

        viewedProducts = viewedProducts.filter((item) => item.id !== newProduct.id);

        viewedProducts.unshift(newProduct);

        viewedProducts = viewedProducts.slice(0, 8);

        localStorage.setItem("recentlyViewed", JSON.stringify(viewedProducts));
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ProductPage">
            <h1>{product.title}</h1>
            <div className="product-list-info">
                <div className="product-img">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => addItemToCart(product)}>Add to Cart</button>
                    <button onClick={() => navigate("/")}>Go back Home</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;

