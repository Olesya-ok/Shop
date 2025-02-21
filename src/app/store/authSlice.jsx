import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, // Початковий стан
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload; // Записуємо користувача
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
