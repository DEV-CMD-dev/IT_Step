import './ProductItem.css'

export default function ProductItem({ image, title, rating, stock ,price }){
    return(
        <div className="ProductItem">
            <img src={image} alt="Product image" />
            <h2>{title}</h2>
            <div>{rating}</div>
            <h3>{stock > 0 ? "In stock" : "Out of stock"}</h3>
            <h2>{price}</h2>
        </div>
    )
}