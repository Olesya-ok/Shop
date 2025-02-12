import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../Api/firebaseConfig";

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload
        }
    }
});

export const fetchProducts = () => async (dispatch) => {
    try {
        const snapshot = await getProducts();
        const products = Object.values(snapshot.val())
        console.log("Fetched products:", products);
        dispatch(setProducts(products));
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
};

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
