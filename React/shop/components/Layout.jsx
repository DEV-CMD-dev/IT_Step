import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="layout">
            <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>
                <header>{isOpen ? 'Shop' : "S"}</header>
                <nav>
                    <Link to="/">
                        <span className="icon">🛒</span>
                        {isOpen && 'Catalog'}
                    </Link>
                    <Link to="/profile">
                        <span className="icon">👤</span>
                        {isOpen && 'Profile'}
                    </Link>
                    <Link to="/addProduct">
                        <span className="icon">📦</span>
                        {isOpen && 'AddProduct'}
                    </Link>
                    <Link to="/help">
                        <span className="icon">❓</span>
                        {isOpen && 'Support'}
                    </Link>
                </nav>
                <button
                    className="toggle-btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '⬅' : '➡'}
                </button>
            </aside>

            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}
