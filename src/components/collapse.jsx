import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../assets/arrow.png';
import '../styles/collapse.scss';

function Collapse({ title, children }) {
    const [isContentVisible, setContentVisible] = useState(false);

    const toggleContentVisibility = () => {
        setContentVisible(!isContentVisible);
    };

    return (
         <div className={`collapse-container ${isContentVisible ? 'expanded' : ''}`}>
            <div className={`collapse-title ${isContentVisible ? 'with-content' : ''}`} onClick={toggleContentVisibility}>
                <p>{title}</p>
                <button className={isContentVisible ? 'rotate' : ''}>
                    <img src={Arrow} alt="Lire le contenu" />
                </button>
            </div>
            <div className={`collapse-content ${isContentVisible ? 'visible' : ''}`}>
                <p>{children}</p>
            </div>
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;