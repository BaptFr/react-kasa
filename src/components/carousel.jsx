import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/carousel.scss';
import ArrowR from '../assets/arrow-r.png';
import ArrowL from '../assets/arrow-l.png';

function Carousel ({pictures})  {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const nextPic = () => {
    setCurrentPictureIndex(prevIndex =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1  //Image suivante. si dernière image, retour même sur la 1ere image
      );
    };
    
  const prevPic = () => {
    setCurrentPictureIndex(prevIndex =>
    prevIndex === 0 ? pictures.length - 1 : prevIndex - 1 //Image précedente. Si première image, retour sur la dernière image.
    );
  };

  const selectedPicture = pictures[currentPictureIndex]
  const renderNavigationAndIndex = pictures.length > 1 ? (
    <>
      <button className='prev-button' onClick={prevPic}><img src={ArrowL} alt='Précédente' /></button>
      <button className='next-button' onClick={nextPic}><img src={ArrowR} alt='Suivante' /></button>  
      <p id='index'>{currentPictureIndex + 1}/{pictures.length}</p>
    </> 
    ) : null; 


    return (
    <div className='carousel-picture-container'>
      <img src={selectedPicture} alt={'intérieur du logement'} />
      <div className='carousel-nav'> {renderNavigationAndIndex}
      </div>
    </div>    
    )
}

Carousel.propTypes = {
    picture: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
};

export default Carousel;