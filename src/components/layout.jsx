
import React from 'react';
import '../styles/layout.scss';
import '../styles/main.scss';
import kasaLogoR from '../assets/kasa-logo-r.png';
import kasaLogoBl from '../assets/kasa-logo-bl.png';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
    return (
        <>
            <header className='header'>
                <div className='kasa-title'>
                    <img src={kasaLogoR} alt="Logo-kasa-r" />
                </div >
                <nav className='nav-header'>
                    <NavLink exact to="/" activeClassName="active">
                        <button>Accueil</button>
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        <button>A Propos</button>
                    </NavLink>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className='footer'>
                <img src={kasaLogoBl} alt="Logo-kasa-bl" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </>
    );
}

export default Layout;