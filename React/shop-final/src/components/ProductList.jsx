import { useState } from 'react';
import ProductItem from './ProductItem'
import './ProductList.css'
import { v4 as uuidv4 } from "uuid";

export default function ProductList({ products }) {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      console.log("removed")
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      console.log("added")
      setFavorites([...favorites, id]);
    }
  };


  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="productList">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          id={uuidv4()}
          image={product.image}
          isFavorite={favorites.includes(product.id)}
          title={product.title}
          rating={product.rating}
          stock={product.stock}
          price={product.price}
          onToggleFavorite={() => toggleFavorites(product.id)}
        />
      ))}
    </div>
  );
}
