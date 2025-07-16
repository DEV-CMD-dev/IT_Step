import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import './AddProduct.css'

export default function AddProduct({ setProducts }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState(5);
  const [stock, setStock] = useState(10);
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      image,
      rating,
      stock,
      price,
    };

    setProducts(prev => [newProduct, ...prev]);

    navigate('/');
  };

  return (
   <div className='addProductContainer'>
    <div className='addProductColumn'>
      <form className='addProductForm' onSubmit={handleSubmit}>
        <h2>Add new product</h2>

        <label>
          Title
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>

        <label>
          Image URL
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </label>

        <label>
          Stock
          <input type="number" value={stock} onChange={(e) => setStock(+e.target.value)} />
        </label>

        <label>
          Price ($)
          <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>

    <div className='productPreview'>
      <ProductItem
        image={image}
        title={title}
        rating={rating}
        stock={stock}
        price={price}
      />
    </div>
  </div>

  );
}
