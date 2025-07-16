import ProductItem from './ProductItem'
import './ProductList.css'

export default function ProductList({ products }) {

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="productList">
      {products.map((product, index) => (
        <ProductItem
          key={product._id || index}
          image={product.image}
          title={product.title}
          rating={product.rating}
          stock={product.stock}
          price={product.price}
        />
      ))}
    </div>
  );
}
