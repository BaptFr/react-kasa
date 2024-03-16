import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.scss';


function Card({ cover, title }){
    return (
    <div className= 'card'>
        <img src= {cover} alt='couverture-annonce'/>
        <p className='card-title'>{title}</p>
        <div className='overlay'></div>
    </div>
    )
}


Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default Card