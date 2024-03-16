import React, { useState, useEffect } from 'react';
import Card from './card.jsx';
import data from '../datas/annonces.json';
 
function Gallery() {
    return (
        <div className='gallery-container'>
            {data.map((annonce, index) => (
                <Card key={index} cover={annonce.cover} title={annonce.title} />
            ))}
        </div>
    )
}

export default Gallery