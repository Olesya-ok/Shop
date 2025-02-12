import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice"

function CartButton({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const isInCart = cartItems.some(item => item.id === product.id);

    const handleAddToCart = () => {
        if (!isInCart) {
            dispatch(addToCart(product));
        }
    };

    return (
        <button onClick={handleAddToCart} disabled={isInCart}>
            {isInCart ? "В корзине" : "Добавить в корзину"}
        </button>
    );
}

export default CartButton;
