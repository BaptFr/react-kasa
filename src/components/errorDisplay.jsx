import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/error.scss'

function Error404(){
    return(
        <div className='error-container'>
            <p className='error-404'>404</p>
            <p className='error-type'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink exact to="/" className='home-link'>
                        <p>Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
    )
}

export default Error404