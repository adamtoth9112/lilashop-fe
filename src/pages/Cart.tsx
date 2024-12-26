import React, { useState, useEffect } from 'react';
import './Cart.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Mock cart items, this should be fetched from a cart service or local storage
  useEffect(() => {
    const mockCart: CartItem[] = [
      { id: 1, name: 'Product 1', price: 99.99 },
      { id: 2, name: 'Product 2', price: 149.99 },
    ];
    setCartItems(mockCart);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Cart;