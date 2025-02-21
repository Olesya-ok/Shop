import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../store/productSlice";

export function useProducts(selectedCategory, sortOrder) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    let sortedProduct = [...filteredProducts];

    switch (sortOrder) {
        case 'asc':
            sortedProduct = sortedProduct.sort((a, b) => a.price - b.price);
            break;
        case 'desc':
            sortedProduct = sortedProduct.sort((a, b) => b.price - a.price);
            break;
            default:
                break;
    }

    return {filteredProducts: sortedProduct};
}
