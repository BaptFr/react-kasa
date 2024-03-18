import React from 'react';
import PropTypes from 'prop-types';
import Arrow from'../assets/arrow.png';
import '../styles/collapse.scss';

function Collapse ({ title, content }){
    return (
    <div className= 'collapse-container'>
          <p className='collapse-title'> {title} </p>
          <button className='collapse-button' onClick={onClick}>
                <img src={Arrow} alt="Flèche pour lire le contenu" />
            </button>
        <p className='collapse-content'>{content}</p>
    </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired 
};


export default Collapse