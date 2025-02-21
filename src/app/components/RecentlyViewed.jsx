import { useState, useEffect } from "react";
import "../../styles/RecentlyViewed.css";
import {Link} from "react-router-dom";

const RecentlyViewed = () => {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem("recentlyViewed");
        if (storedProducts) {
            setRecentlyViewed(JSON.parse(storedProducts));
        }
    }, []);

    if (recentlyViewed.length === 0) return null;

    return (
        <div className="recently-viewed">
            <div className="recently-viewed-grid">
                {recentlyViewed.map((product) => (
                    <div className="product-card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} />
                        </Link>
                        <p>{product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
