import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart } from '../slices/CartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {items.map((item) => (
              <li key={item.id}>
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </li>
          ))}
        </ul>
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
  );
};

export default Cart;
