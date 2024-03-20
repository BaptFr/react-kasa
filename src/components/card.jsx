import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/card.scss';



function Card({ id, cover, title }){
    return (
        <Link to={`/logement/${id}`} className='card-link'>
            <div className= 'card'>
                <img src= {cover} alt='couverture-annonce'/>
                <p className='card-title'>{title}</p>
                <div className='overlay'></div>
            </div>
        </Link>
    )
}


Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default Card