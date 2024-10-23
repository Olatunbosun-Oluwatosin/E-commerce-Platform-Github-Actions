// src/components/OrderPlacement.js
import React from 'react';
import axios from '../api/axios';  // Import the configured Axios instance

const OrderPlacement = ({ cart, user }) => {
  const placeOrder = async () => {
    if (!user) {
      alert('Please log in to place an order.');
      return;
    }

    try {
      const response = await axios.post('/orders', {
        userId: user.id,
        products: cart,
      });
      alert('Order placed successfully!');
    } catch (error) {
      alert('Error placing order: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderPlacement;
