import React from 'react';
import { useCart } from '../../context/cart';

const Checkout = () => {
    const { cartItems, removeFromCart } = useCart();

    // Function to calculate the total price of items in the cart
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <div className="container">
            <h2>Checkout</h2>
            <div>
                {/* Display cart items */}
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {/* Display total price */}
                <h3>Total: ${calculateTotalPrice()}</h3>
                {/* Add checkout form or button here */}
            </div>
        </div>
    );
}

export default Checkout;
