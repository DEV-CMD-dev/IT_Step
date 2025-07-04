import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopItem from '../components/ShopItem';
import Layout from '../components/Layout';
import './App.css'
import ProductsPage from '../components/ProductsPage';
import NotFound404 from '../components/notFound404';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path="profile" element={<h2>Profile</h2>} />
          <Route path="settings" element={<h2>Settings</h2>} />
          <Route path="help" element={<h2>Support</h2>} />
          <Route path="*" element={<NotFound404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
