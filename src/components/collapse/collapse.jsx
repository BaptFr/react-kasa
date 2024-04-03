import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../assets/arrow.png';
import './collapse.sass';

function Collapse({ title, children }) {                               //useState for open/close collapses
    const [isContentVisible, setContentVisible] = useState(false);

    const toggleContentVisibility = () => {
        setContentVisible(!isContentVisible);
    };

    return ( //Conditions class add with useState
       
         <div className={`collapse__container ${isContentVisible ? 'expanded' : ''}`}>
            <div className={`collapse__title ${isContentVisible ? 'with-content' : ''}`} onClick={toggleContentVisibility}>
                <p>{title}</p>
                <button className={isContentVisible ? 'rotate' : ''}>
                    <img src={Arrow} alt="A cliquer pour lire le contenu" />
                </button>
            </div>
            <div className={`collapse__content ${isContentVisible ? 'visible' : ''}`}>
                {children}
            </div>
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;