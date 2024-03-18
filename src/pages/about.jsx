import React from 'react';
import Banner from '../components/banner.jsx';
import AboutCollapses from '../components/aboutCollapses.jsx';
import aboutBannerPic from '../assets/about-banner-pic.jpg';


function About() {
    return (
  
      <div className='about-banner'>
      < Banner imageSrc={aboutBannerPic} showText= {false}/>
      < AboutCollapses />
      </div>
    );
  }
  
  export default About
       
  