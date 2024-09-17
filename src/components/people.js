// src/components/people.js
import React from 'react';
import '../styles/people.scss'; // Assure-toi d'avoir les styles pour ce composant


const People = ({ picture, host }) => {
  return (
    <div className="people">
      {/* Div qui contient l'image et le nom */}
      <div className="people__host">
        <div className="people__info">
          <h2 className="people__name">{host}</h2>
        </div>
        <div className="people__image">
          <img src={picture} alt={`${host} portrait`} />
        </div>
      </div>
    </div>
  );
};

export default People;