import React from 'react';
import './banner.sass';

function Banner({ imageSrc, showText,  brightness}){
    return(
    <div className="banner">
        <img src={imageSrc}  alt= 'banière paysage'style={{ filter: `brightness(${brightness})` }}/>
        {showText && <p> Chez vous, partout ailleurs</p>}
    </div>
    )
}

export default Banner