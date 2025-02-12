import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        changeQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item) {
                item.quantity += amount;
                if (item.quantity < 1) {
                    state.cartItems = state.cartItems.filter(item => item.id !== id);
                }
            }
        }
    },
});

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
