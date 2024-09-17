import React from 'react';
import Carousel from '../components/carousel'; // Assure-toi que le chemin est correct
import data from '../data/data.json'; // Assure-toi que le chemin est correct

const TestCarousel = () => {
    const propertyId = data[0]?.id; // Exemple : prend le premier ID disponible

    return (
        <div>
            <h1>Test du Carousel</h1>
            {propertyId ? <Carousel propertyId={propertyId} /> : <p>No property ID found</p>}
        </div>
    );
};

export default TestCarousel;