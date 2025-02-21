import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritesItems: [],
};

export const favoritesSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const itemExists = state.favoritesItems.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.favoritesItems.push(action.payload);
            }
        },
        removeFromFavorites: (state, action) => {
            state.favoritesItems = state.favoritesItems.filter(item => item.id !== action.payload);
        }
    }
});

export const selectFavorite = (state) => state.favorite.favoritesItems;

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
