import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";

export function useProducts(selectedCategory) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return { filteredProducts };
}
