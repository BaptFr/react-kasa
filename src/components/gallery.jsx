import React from 'react';
import Card from './card.jsx';
import data from '../datas/annonces.json';
 
function Gallery() {
    return (
        <ul className='gallery-container'>
            {data.map((annonce, id) => (
                <li key={id}>
                    <Card id={annonce.id} cover={annonce.cover} title={annonce.title} />
                </li>
            ))}
        </ul>
    )
}

export default Gallery