import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart.redux';


//import cart reducer
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})