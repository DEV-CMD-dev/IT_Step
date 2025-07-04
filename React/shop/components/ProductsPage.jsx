import ShopItem from "./ShopItem";

const products = [
  {
    title: "Wireless headphones",
    rating: 4.7,
    stock: 120,
    price: 399,
    discount: 20,
    image: "https://content1.rozetka.com.ua/goods/images/big/424931303.jpg"
  },
  {
    title: "Smartphone Samsung Galaxy",
    rating: 4.5,
    stock: 0,
    price: 12999,
    discount: 0,
    image: "https://content.rozetka.com.ua/goods/images/big/473822717.jpg"
  },
  {
    title: "Laptop Lenovo",
    rating: 4.3,
    stock: 30,
    price: 21999,
    discount: 2500,
    image: "https://content1.rozetka.com.ua/goods/images/big/551442073.png"
  },
  {
    title: "Gaming mouse",
    rating: 4.8,
    stock: 200,
    price: 599,
    discount: 0,
    image: "https://content.rozetka.com.ua/goods/images/big/12934309.jpg"
  },
  {
    title: "Monitor 24'' Full HD",
    rating: 4.6,
    stock: 60,
    price: 3499,
    discount: 0,
    image: "https://content2.rozetka.com.ua/goods/images/big/557825511.jpg"
  }
];

export default function ProductsPage() {
    return (
        <>
            <h2>Catalog</h2>
            <div className="productList">
            {products.map((product, index) => (
                <ShopItem
                    key={index}
                    title={product.title}
                    rating={product.rating}
                    stock={product.stock}
                    price={product.price}
                    discount={product.discount}
                    image={product.image}
                />
            ))}
        </div>
        </>
    );
}