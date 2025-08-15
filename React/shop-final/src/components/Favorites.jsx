 import ProductList from "./ProductList";

export default function Favorites({ products, favorites, toggleFavorites, cart, setCart }) {
    return (
        <ProductList 
            products={products} 
            favorites={favorites} 
            toggleFavorites={toggleFavorites} 
            favoritesOnly={true} 
            cart={cart}
            setCart={setCart}
        />
    );    
}