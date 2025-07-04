export default function ShopItem({title, rating, stock, price, discount, image})
{
    const hasDiscount = discount > 0;
    const isInStock = stock > 0;

    return (
        <div className={`shopItem ${stock === 0 ? "shopItem-disabled" : ""}`}>
            <img src={image} alt="Image" />

            <div className="shopItemDesc">
                <h2>{title}</h2>
                <div className="shopItemRating">{rating}/5</div>
                <h5 className={isInStock ? "inStock" : "outOfStock"}>
                {isInStock ? "In stock" : "Out of stock"}
                </h5>
            </div>

            <div className="shopItemPrice">
                <h4 className={hasDiscount && isInStock ? "oldPrice" : ""}>  
                    {hasDiscount
                        ? <>{price - discount}$</>
                        : <span>&nbsp;</span>}
                </h4>
                <h2 className={hasDiscount ? "hotPrice" : ""}>{price}$</h2>
            </div>
        </div>


    )
}