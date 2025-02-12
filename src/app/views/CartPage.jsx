import { useSelector, useDispatch } from "react-redux";
import { changeQuantity } from "../store/cartSlice";

function CartPage() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} width="50" />
                            {item.title} - ${item.price} x {item.quantity} шт. = ${item.price * item.quantity}
                            <button onClick={() => dispatch(changeQuantity({ id: item.id, amount: -1 }))}>➖</button>
                            <button onClick={() => dispatch(changeQuantity({ id: item.id, amount: 1 }))}>➕</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;

