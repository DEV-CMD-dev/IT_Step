import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import NotFound from './layouts/NotFound'
import ProductList from './components/ProductList'
import { useEffect, useState } from 'react'

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
            element={loading ? <p>Loading...</p> : <ProductList products={products} />}/>
          <Route path="profile" element={<p>profile</p>} />
          <Route path="addProducts" element={<p>addProducts</p>} />
          <Route path="support" element={<p>support</p>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
