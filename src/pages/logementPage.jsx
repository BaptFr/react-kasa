import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/carousel.jsx';
import annoncesData from '../datas/annonces.json';
import Collapse from '../components/collapse.jsx';
import '../styles/logement.scss';

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
    <div className='logement-page-container'>
      <Carousel pictures={logement.pictures} />

      <div className='logement-infos-container'>
        <div> <p id='logement-name'> {logement.title}</p>
              <p id ='logement-location'>{logement.location}</p> 
        </div>
        <div id='host-container'>
          <p>{logement.host.name}</p>
        </div>
      </div>  

      <div className='logement-tags-container'>
        <div> {logement.tags}</div>
        <div> {logement.rating}</div>
      </div>

      <div className='logement-collapses-container'>
        <Collapse/>
        <Collapse/>
      </div>
    </div>
  );
}

export default Logement;