import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './carousel.sass';
import ArrowR from '../../assets/arrow-r.png';
import ArrowL from '../../assets/arrow-l.png';

function Carousel ({pictures})  {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const nextPic = () => {
    setCurrentPictureIndex(prevIndex =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1  //Next picture
      );
    };
    
  const prevPic = () => {
    setCurrentPictureIndex(prevIndex =>
    prevIndex === 0 ? pictures.length - 1 : prevIndex - 1 //Previous carousel picture
    );
  };

  const selectedPicture = pictures[currentPictureIndex]
  const renderNavigationAndIndex = pictures.length > 1 ? (
    <>
      <button className='prev__button' onClick={prevPic}><img src={ArrowL} alt='Précédente' /></button>
      <button className='next__button' onClick={nextPic}><img src={ArrowR} alt='Suivante' /></button>  
      <p id='index'>{currentPictureIndex + 1}/{pictures.length}</p>
    </> 
    ) : null; 

    return (
    <div className='carousel__picture__container'>
      <img src={selectedPicture} alt={'intérieur du logement'} />
      <div className='carousel__nav'> {renderNavigationAndIndex}
      </div>
    </div>    
    )
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string
};

export default Carousel;