import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './MainLayout.css';

export default function MainLayout({cart}) {
    const [isOpen, setIsOpen] = useState(true);

    let isCartNotEmpty = cart.length > 0;

    return (
        <div className="layout">
            <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>
                <header onClick={() => setIsOpen(!isOpen)}>
                    <img src='/images/ShopLogo.png' />
                    {isOpen ? "Shop" : ""}
                </header>
                <nav>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="icon"><img src='/images/marketLogo.png' /></span>
                        {isOpen && 'Catalog'}
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="icon"><img src='/images/userLogo.png'></img></span>
                        {isOpen && 'Profile'}
                    </NavLink>
                    <NavLink
                        to="/addProducts"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="icon"><img src='/images/addProductLogo.png' /></span>
                        {isOpen && 'AddProduct'}
                    </NavLink>
                    <NavLink
                        to="/favorite"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="icon"><img src='/images/favoriteLogo.png' /></span>
                        {isOpen && 'Favorite'}
                    </NavLink>
                    <NavLink
                        to="/support"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="icon"><img src='/images/supportLogo.png' /></span>
                        {isOpen && 'Support'}
                    </NavLink>
                </nav>
                <footer>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className='icon'>
                            <img src='/images/shoppingCart.png'/>
                            <div className={isCartNotEmpty ? 'cartItemCounter' : ''}>{isCartNotEmpty ? cart.length  : ''}</div>  
                        </span>
                        {isOpen && 'Cart'}
                    </NavLink>
                </footer>
            </aside>

            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}
