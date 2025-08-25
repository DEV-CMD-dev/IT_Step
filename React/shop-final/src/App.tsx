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
import Favorites from './components/Favorites'
import { UserRole } from './components/classes/UserRole'
import { User } from './components/classes/User'

interface Product {
  _id: string;
  image: string;
  title: string;
  rating: number;
  stock: number;
  price: number;
}


function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  const addToCart = (id) => {
    setCart(prev => {
      if (!Array.isArray(prev)) return [id];
      return prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id];
    });
  };



  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorites = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

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
        <Route path='/' element={<MainLayout cart={cart} />}>
          <Route
            index
            element={loading ? <LoadScreen /> : <ProductList products={products} favorites={favorites} toggleFavorites={toggleFavorites} cart={cart} setCart={addToCart} />} />
          <Route path="profile" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="addProducts" element={currentUser && currentUser.role !== UserRole.User ? <AddProduct setProducts={setProducts} /> : <p>You need to be registered as Manager</p>} />
          <Route path="favorite" element={<Favorites favorites={favorites} products={products} toggleFavorites={toggleFavorites} cart={cart} setCart={addToCart} />} />
          {/* <Route path="support" element={<p>support</p>} /> */}
          <Route path="*" element={<NotFound />} />
          <Route
            path='cart' element={<ShoppingCart products={products.filter(product => cart.includes(product._id))} favorites={favorites} toggleFavorites={toggleFavorites} setCart={addToCart} cart={cart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
