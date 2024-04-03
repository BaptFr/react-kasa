
import React from 'react';
import './layout.sass';
import '../../pagesStyles/main.sass';
import kasaLogoR from '../../assets/kasa-logo-r.png';
import kasaLogoBl from '../../assets/kasa-logo-bl.png';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
    return (
        <>
            <header>
                <h1> kasa </h1>
                <div className='header__title'>
                    <img src={kasaLogoR} alt="Logo-kasa-r" />
                </div >
                <nav className='navbar'>
                    <NavLink to="/" >
                        <button>Accueil</button>
                    </NavLink>
                    <NavLink to="/about" >
                        <button>A Propos</button>
                    </NavLink>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className='footer__containt'>
                    <img src={kasaLogoBl} alt="Logo-kasa-bl" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    );

}

export default Layout
