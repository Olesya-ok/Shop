import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQuantity } from "../store/cartSlice";

export function useCart() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const addItemToCart = (product) => {
        dispatch(addToCart(product));
    }

    const updateQuantity = (id, amount) => {
        dispatch(changeQuantity({ id, amount }));
    }

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return { cartItems, addItemToCart, updateQuantity, totalPrice };
}
