import ProductItem from './ProductItem';
import './ProductList.css';

export default function ProductList({ products, favorites, toggleFavorites, favoritesOnly = false }) {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const displayedProducts = favoritesOnly
    ? products.filter((product) => favorites.includes(product._id))
    : products;

  if (displayedProducts.length === 0) {
    return <p>{favoritesOnly ? 'No favorite products.' : 'No products available.'}</p>;
  }

  return (
    <div className="productList">
      {displayedProducts.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          image={product.image}
          isFavorite={favorites.includes(product._id)}
          title={product.title}
          rating={product.rating}
          stock={product.stock}
          price={product.price}
          onToggleFavorite={() => toggleFavorites(product._id)}
        />
      ))}
    </div>
  );
}
