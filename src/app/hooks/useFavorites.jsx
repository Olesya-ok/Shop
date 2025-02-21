import {useDispatch, useSelector} from "react-redux";
import {addToFavorites, removeFromFavorites, selectFavorite} from "../store/favoritesSlice";

export function useFavorites () {
    const favorites = useSelector(selectFavorite);
    const dispatch = useDispatch();

    const addItemFavorites = (product) => {
            dispatch(addToFavorites(product));
    }

    const removeItemFavorites = (id) => {
        dispatch(removeFromFavorites(id));
    }

    return {favorites, addItemFavorites, removeItemFavorites }
}