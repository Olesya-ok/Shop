import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./app/views/Home";
import CartPage from "./app/views/CartPage";
import FavoritesPage from "./app/views/FavoritesPage";
import AuthPage from "./app/views/AuthPage";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import ProductPage from "./app/views/ProductPage";
import "./App.css"

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="App">
            <Header onCategoryChange={handleCategoryChange} />

            <Routes>
                <Route index element={<Home selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />} />
                <Route path="product/:id" element={<ProductPage />}  />
                <Route path="cart" element={<CartPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="auth" element={<AuthPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;




