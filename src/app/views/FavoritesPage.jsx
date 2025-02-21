import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import ProductCard from '../components/ProductCard';
import "../../styles/FavoritePage.css"

function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <div className="favorites-page">
            <h1>Your Favorites</h1>
            {favorites.length === 0 ? (
                <p>No products in favorites yet.</p>
            ) : (
                <div className="favorites-list">
                    {favorites.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritesPage;
