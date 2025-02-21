import '../../styles/ProductCard.css'
import CartButton from "./CartButton";
import {Link} from "react-router-dom";
import FavoritesButton from "./FavoritesButton";


function ProductCard({ product }) {
    return (
        <div className="productCard">
            <div className="product-image-wrapper">
                <div className="product-image-container">
                    <img src={product.image} alt={product.title} className="product-image"/>
                </div>
                <FavoritesButton product={product}/>
            </div>

            <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description.split(" ").slice(0, 10).join(" ")}...</p>
                <span>{`$${product.price}`}</span>
                <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
            <CartButton product={product}/>
        </div>
    );
}

export default ProductCard;

