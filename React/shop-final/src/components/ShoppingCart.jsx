import EmptyCart from "../layouts/EmptyCart";

export default function ShoppingCart({ products }){
    if (!products || products.length === 0) {
        return <EmptyCart />
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
                    price={product.price}/>
            ))}
        </div>
    );
}