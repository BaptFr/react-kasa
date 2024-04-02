import React from 'react';
import Gallery from '../components/gallery/gallery.jsx';
import Banner from '../components/banner/banner.jsx';
import homeBannerPic from '../assets/home-banner-pic.jpg'
import '../components/gallery/gallery.sass';


function Home() {
  const homeBannerBrightness= '45%'
  return (
    <div className='home__container'>
      <Banner  imageSrc={homeBannerPic} showText = {true} brightness={homeBannerBrightness}/> 
      <Gallery />
   </div>
  
  );
}

export default Home
     

      

 

