import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import NotFound from './layouts/NotFound'
import ProductItem from './components/ProductItem'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}> 
            <Route index element={
              <ProductItem image="https://content.rozetka.com.ua/goods/images/big/9965747.jpg" title="Generator" rating="4/5" stock={50} price="899"/>
            } />
            <Route path="profile" element={<p>profile</p>} />
            <Route path="addProducts" element={<p>addProducts</p>} />
            <Route path="support" element={<p>support</p>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
