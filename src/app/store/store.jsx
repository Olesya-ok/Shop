import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoriteReducer from './favoritesSlice';
import productReducer from './productSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer,
        product: productReducer,
        auth: authReducer,
    },
});

export default store;
