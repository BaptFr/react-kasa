import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/carousel/carousel.jsx';
import annoncesData from '../datas/annonces.json';
import Rating from '../components/rating/ratingStars.jsx';
import Collapse from '../components/collapse/collapse.jsx';
import '../pagesStyles/logement.sass';

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null); 

  useEffect(() => {
    const logementData = annoncesData.find(item => item.id === id);
    setLogement(logementData); 
  }, [id]);
 
  if (!logement) {
    return 'Chargement';
  }

  return (
    <div className='logement-page__container'>
      <Carousel pictures={logement.pictures} />

      <div className='logement-infos__container'>
        <div className='logement-details__container'>
          <div> <p id='logement-name'> {logement.title}</p>
                <p id ='logement-location'>{logement.location}</p> 
          </div>
          <div className='logement-tags__container'> 
            <ul>
              {logement.tags.map((tag, index) => (
                  <li key={index}>
                    <p>{tag}</p>
                  </li>
              ))}
            </ul>
          </div> 
        </div> 
        <div className='host-and-rate__container'>
          <div id='host-container'>
              <p>{logement.host.name}</p>
                <img id='host-content' src= {logement.host.picture} alt='Portrait du propriétaire' />       
            </div>

            <div className='logement-rating__container'> 
              <Rating rating={logement.rating} /></div>
          </div>
      </div> 

      <div className='logement-collapses__container'>
        <Collapse title='Description'> 
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title='Équipements'>
          <ul>
           {logement.equipments.map((equipement, index) => (
            <li key={index}>
              <p>{equipement}</p>
            </li>
           ))}
         </ul> 
        </Collapse>
        
      </div>
    </div>
  );
}

export default Logement;