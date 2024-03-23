import React from 'react';
import Gallery from '../components/gallery.jsx';
import Banner from '../components/banner.jsx';
import homeBannerPic from '../assets/home-banner-pic.jpg'
import '../styles/gallery.scss';


function Home() {
  return (
    <div>
      <Banner  imageSrc={homeBannerPic} showText = {true} /> 
      <Gallery />
   </div>
  
  );
}

export default Home
     

      

 

