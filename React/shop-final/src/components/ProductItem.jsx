import { useState } from 'react';
import './ProductItem.css'

export default function ProductItem({ id, image, isFavorite, title, rating, stock, price, onToggleFavorite }) {
    const inStock = stock > 0
    const [imgError, setImgError] = useState(false);



    const imageSrc = !image || imgError ? '/images/imagePlaceholder.png' : image;
    const altText = !image || imgError ? 'No photo' : 'Product photo';

    return (
        <div className={"ProductItem" + (inStock ? "" : " inactiveItem")}>
            <span>
                <img
                    src={imageSrc}
                    alt={altText}
                    onError={() => setImgError(true)}
                />
                <button onClick={() => onToggleFavorite(id)} className='favoriteButton'>
                    <img src={isFavorite ? '/images/Favorite.png' : '/images/nonFavorite.png'}></img>
                </button>
            </span>
            <h2 className="ellipsis" style={{ color: isFavorite ? 'yellow' : '' }}>{title}</h2>
            <div>{rating}/5</div>
            <h3 className={inStock ? "inStock" : "outOfStock"}>{inStock ? "In stock" : "Out of stock"}</h3>
            <h2>{price}$</h2>

            <button className='addToCartButton'>Add to Cart</button>

        </div>
    )
}