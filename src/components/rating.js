// src/components/rating.js
import React from 'react';
import '../styles/rating.scss'; // Crée un fichier SCSS séparé pour les styles si besoin

const Rating = ({ rating }) => {
  const maxRating = 5; // Nombre maximum d'étoiles

  // Fonction qui génère les étoiles
  const generateStars = () => {
    let stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'star--filled' : 'star--empty'}`}
        >
          ★
        </span>
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