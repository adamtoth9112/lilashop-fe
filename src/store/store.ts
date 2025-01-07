import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/ProductSlice';
import cartReducer from '../slices/CartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
