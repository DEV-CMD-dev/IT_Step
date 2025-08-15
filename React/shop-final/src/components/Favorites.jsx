 import ProductList from "./ProductList";

export default function Favorites({ products, favorites, toggleFavorites})
{
    return (
        <ProductList products={products} favorites={favorites} toggleFavorites={toggleFavorites} favoritesOnly={true} />
    )    
}