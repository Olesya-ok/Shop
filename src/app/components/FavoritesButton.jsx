import {useFavorites} from "../hooks/useFavorites";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";


function FavoritesButton({product}) {
    const {favorites, addItemFavorites, removeItemFavorites} = useFavorites()

    const isInFavorites = favorites.some(favorite => favorite.id === product.id)

    const label = {inputProps: {'aria-label': 'Checkbox demo'}};

    function favoritesHandler(event) {
        if (isInFavorites) {
            removeItemFavorites(product.id)
        } else {
            addItemFavorites(product)
        }
    }

    return (
        <div className="FavoritesButton">
            <Checkbox
                {...label}
                checked={isInFavorites}
                onChange={favoritesHandler}
                icon={<FavoriteBorder/>}
                checkedIcon={<Favorite/>}/>
        </div>
    )
}

export default FavoritesButton;
