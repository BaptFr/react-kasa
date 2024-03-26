import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Rating ({rating}){
    const stars = Array.from({length: 5}).map((_, index)=> (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      style={{ color: index < rating ? '#ff6060' : '#e3e3e3' }}
    />


    ))
    return(
        <div>
            {stars}
        </div>
    )
}

export default Rating;