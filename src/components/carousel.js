import React, { useState, useEffect } from 'react';
import '../styles/carousel.scss'; 
import properties from '../data/data.json';
import openerButton from '../img/opener_button.png'; 

function Carousel({ propertyId }) {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const property = properties.find(prop => prop.id === propertyId);
        if (property && property.pictures) {
            setImages(property.pictures);
            setCurrentIndex(0);
        } else {
            console.error("Property not found or no pictures available");
        }
    }, [propertyId]);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            {images.length > 0 ? (
                <div className="carousel__inner">
                    {images.length > 1 && (
                        <button className="carousel__button carousel__button--prev" onClick={goToPrevious}>
                            <img src={openerButton} alt="Previous" />
                        </button>
                    )}
                    <div className="carousel__item">
                        <img src={images[currentIndex]} alt={`Appartement ${currentIndex + 1}`} className="carousel__image"/>
                    </div>
                    {images.length > 1 && (
                        <button className="carousel__button carousel__button--next" onClick={goToNext}>
                            <img src={openerButton} alt="Next" />
                        </button>
                    )}
                </div>
            ) : (
                <p className="carousel__no-images">No images available</p>
            )}
        </div>
    );
}

export default Carousel;