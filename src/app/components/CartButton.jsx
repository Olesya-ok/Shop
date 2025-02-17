import {useCart} from "../hooks/useCart";

function CartButton({ product }) {
        const {cartItems, addItemToCart} = useCart()

    const isInCart = cartItems.some(item => item.id === product.id)

    return (
        <button onClick= {() => addItemToCart(product)} disabled={isInCart}>
            {isInCart ? "В корзине" : "Добавить в корзину"}
        </button>
    );
}

export default CartButton;
