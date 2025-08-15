import EmptyCart from "../layouts/EmptyCart";
import ProductItem from "./ProductItem";

export default function ShoppingCart({ products, favorites, toggleFavorites, setCart, cart }) {
    if (!products || products.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className="productList">
            {products.map((product) => (
                <ProductItem
                    key={product._id}
                    id={product._id}
                    image={product.image}
                    title={product.title}
                    rating={product.rating}
                    stock={product.stock}
                    price={product.price}
                    onCartAdded={() => setCart(product._id)}
                    isInCart={cart.includes(product._id)}
                    isFavorite={favorites.includes(product._id)}
                    onToggleFavorite={() => toggleFavorites(product._id)}/>

            ))}
        </div>
    );
}