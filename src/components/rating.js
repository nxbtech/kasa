// src/components/rating.js
import React from 'react';
import '../styles/rating.scss'; // Crée un fichier SCSS séparé pour les styles si besoin
import activeStar from '../img/star-active.png';
import inactiveStar from '../img/star-inactive.png';

const Rating = ({ rating }) => {
  const maxRating = 5; // Nombre maximum d'étoiles

  // Fonction qui génère les étoiles
  const generateStars = () => {
    let stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? activeStar : inactiveStar} // Utilise les images selon la note
          alt="star"
          className="star"
        />
      );
    }
    return stars;
  };

  return (
    <div className="rating">
      {generateStars()} {/* Génère les étoiles */}
    </div>
  );
};

export default Rating;