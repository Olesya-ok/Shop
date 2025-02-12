import '../../styles/ProductCard.css'
import CartButton from "./CartButton";

function ProductCard({ product }) {
    console.log(product);
    return (
        <div className="productCard">
            <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span>{`$${product.price}`}</span>
            </div>
            <CartButton product={product} />
        </div>
    );
}

export default ProductCard;

