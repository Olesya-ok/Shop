import { useCart } from "../hooks/useCart";
import "../../styles/CartPage.css";
import "../../App.css"
import {useAuth} from "../hooks/useAuth";

function CartPage({openAuthModal }) {
    const { cartItems, updateQuantity, totalPrice } = useCart();
    const isAuthenticated = useAuth();

    const handleOrderClick = () => {
        if (!isAuthenticated) {
            openAuthModal();
        } else {
            console.log("Заказ оформляется...");
        }
    };

    return (
        <div className="cart">
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title}/>
                            <div className="cart-item-info">
                                <span className="cart-item-title">{item.title}</span>
                                <span className="cart-item-price">
                                    ${item.price} x {item.quantity} = ${item.price * item.quantity}
                                </span>
                            </div>
                            <div className="cart-quantity">
                                <button onClick={() => updateQuantity(item.id, -1)}>➖</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>➕</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h2 className="cart-total">Total price: ${totalPrice}</h2>

            <div >
                <button onClick={handleOrderClick} className="button-orders">Place an order</button>
            </div>

        </div>
    );
}

export default CartPage;



