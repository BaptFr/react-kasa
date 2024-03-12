
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>KASA</p>
                <p>2020 KASA. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Layout;