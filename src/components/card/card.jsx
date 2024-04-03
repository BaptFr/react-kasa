import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.sass';

function Card({ id, cover, title }){
    return (
        <Link to={`/logement/${id}`} className='card__link'>
            <div className= 'card'>
                <img src= {cover} alt='intérieur appartement'/>
                <p className='card__title'>{title}</p>
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