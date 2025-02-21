import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./app/views/Home";
import CartPage from "./app/views/CartPage";
import FavoritesPage from "./app/views/FavoritesPage";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import ProductPage from "./app/views/ProductPage";
import "./App.css"
import AuthModal from "./app/views/AuthPage";


function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="App" >
            <Header onCategoryChange={handleCategoryChange} onAuthClick={() => setIsAuthModalOpen(true)}/>

            <div className="main-content">


            <Routes >
                <Route index element={<Home selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />} />
                <Route path="product/:id" element={<ProductPage />}  />
                <Route path="cart" element={<CartPage  openAuthModal={() => setIsAuthModalOpen(true)} />} />
                <Route path="favorites" element={<FavoritesPage />} />
            </Routes>
            </div>
            <Footer onAuthClick={() => setIsAuthModalOpen(true)}/>
            {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
        </div>
    );
}

export default App;




