import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import NotFound from './layouts/NotFound'
import { useEffect, useState } from 'react'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import ProfilePage from './components/ProfilePage'
import ShoppingCart from './components/ShoppingCart'
import LoadScreen from './layouts/LoadScreen'

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapiserver.reactbd.org/api/products");
        const data = await response.json();
        setProducts(data.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route
            index
            element={loading ? <LoadScreen /> : <ProductList products={products} />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="addProducts" element={<AddProduct setProducts={setProducts} />} />
          <Route path="favorite" element={<p>favorite</p>} />
          <Route path="support" element={<p>support</p>} />
          <Route path="*" element={<NotFound />} />
          <Route path='cart' element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
