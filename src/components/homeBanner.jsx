import React from 'react';
import '../styles/homeBanner.scss';
import homeBannerPic from '../assets/home-banner-pic.jpg';



function Banner(){
    return(
    <div className="home-banner">
        <img src={homeBannerPic} alt="Côtes-océan"/>
        <p> Chez vous, partout ailleurs</p>
    </div>
    )
}

export default Banner