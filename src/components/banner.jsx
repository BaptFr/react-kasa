import React from 'react';
import '../styles/banner.scss';

function Banner({ imageSrc, showText}){
    return(
    <div className="banner">
        <img src={imageSrc}  alt= 'baniere-paysage'/>
        {showText && <p> Chez vous, partout ailleurs</p>}
    </div>
    )
}

export default Banner