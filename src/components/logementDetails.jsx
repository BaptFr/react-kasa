import React from 'react';
import PropTypes from 'prop-types';
import data from '../datas/annonces.json'; 

function LogementDetails(props) {
  const { id } = props.match.params;
  const annonce = data.find(annonce => annonce.id === parseInt(id));

  if (!annonce) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='logement-container'>
      <div className='logement-carrousel'>
        CAROUSSEL
      </div>
      <div className='logement-name'>
        NOM LOGEMENT
      </div>
      <div className='logement-tags-notation'>
        <span>tag1</span>
        <span>tag2</span>
        <span>tag3</span>
      </div>
      <div className='logement-equipements'>
        <h3>Équipements:</h3>
        
      </div>
    </div>
  );
}

LogementDetails.propTypes = {
  match: PropTypes.object.isRequired, 
};

export default LogementDetails;