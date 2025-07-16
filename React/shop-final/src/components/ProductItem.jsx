import { useState } from 'react';
import './ProductItem.css'

export default function ProductItem({ image, title, rating, stock ,price }){
    const inStock = stock > 0
    const [imgError, setImgError] = useState(false);
    

    const imageSrc = !image || imgError ? '/images/imagePlaceholder.png' : image;
    const altText = !image || imgError ? 'No photo' : 'Product photo';
    
    return(
        <div className={"ProductItem" + (inStock ? "" : " inactiveItem")}>
            <img
                src={imageSrc}
                alt={altText}
                onError={() => setImgError(true)}
                />
            <h2 className="ellipsis">{title}</h2>
            <div>{rating}/5</div>
            <h3 className={inStock ? "inStock" : "outOfStock" }>{inStock ? "In stock" : "Out of stock"}</h3>
            <h2>{price}$</h2>
            <button>Add to Cart</button>
        </div>
    )
}