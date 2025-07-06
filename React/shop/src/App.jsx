import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopItem from '../components/ShopItem';
import Layout from '../components/Layout';
import { useState } from "react";
import './App.css'
import ProductsPage from '../components/ProductsPage';
import NotFound404 from '../components/notFound404';
import AddProduct from '../components/AddProduct';


const initialProducts =  [
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
  },
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
  },{
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
  },{
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



function App() {
  const [products, setProducts] = useState(initialProducts);
  
  const handleCreate = (product) =>{
    setProducts([...products, {...product, id: Date.now()}])
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage products={products} />} />
          <Route path="profile" element={<h2>Profile</h2>} />
          <Route path="addProduct" element={<AddProduct onCreate={handleCreate} products={products} />} />
          <Route path="help" element={<h2>Support</h2>} />
          <Route path="*" element={<NotFound404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
