import {useCart} from "../hooks/useCart";

function CartButton({ product }) {
        const {cartItems, addItemToCart} = useCart()

    const isInCart = cartItems.some(item => item.id === product.id)

    return (
        <button className="cart-button" onClick= {() => addItemToCart(product)} disabled={isInCart}>
            {isInCart ? "In the Card" : "Add to Cart"}
        </button>
    );
}

export default CartButton;
