import './ProductItem.css'

export default function ProductItem({ image, title, rating, stock ,price }){
    const inStock = stock > 0
    
    
    return(
        <div className={"ProductItem" + (inStock ? "" : " inactiveItem")}>
            <img src={image} alt="Product image" />
            <h2 className="ellipsis">{title}</h2>
            <div>{rating}/5</div>
            <h3 className={inStock ? "inStock" : "outOfStock" }>{inStock ? "In stock" : "Out of stock"}</h3>
            <h2>{price}$</h2>
        </div>
    )
}