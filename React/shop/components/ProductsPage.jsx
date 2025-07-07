import ShopItem from "./ShopItem";




export default function ProductsPage({ products }) {
  if (!products) return <h2>No products yet.</h2>;

  return (
    <div className="productList">
      {products.map((product, id) => (
        <ShopItem
          key={id}
          title={product.title}
          rating={product.rating}
          stock={product.stock}
          price={product.price}
          discount={product.discount}
          image={product.image}
        />
      ))}
    </div>
  );
}
