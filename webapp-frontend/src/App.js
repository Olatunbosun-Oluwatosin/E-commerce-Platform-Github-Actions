// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import ProductList from './components/ProductList';
import OrderPlacement from './components/OrderPlacement';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>E-commerce Platform</h1>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <ProductList addToCart={addToCart} />
          <OrderPlacement cart={cart} user={user} />
        </>
      )}
    </div>
  );
};

export default App;
