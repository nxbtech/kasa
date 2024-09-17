// src/pages/presentation.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';  // Importe les données JSON
import Carousel from '../components/carousel';
import Tag from '../components/tag';
import People from '../components/people';
import Opener from '../components/opener'; // Assurez-vous que le chemin est correct
import '../styles/presentation.scss';
import Rating from '../components/rating';

const Presentation = () => {
  const { id } = useParams();  // Récupère l'ID à partir de l'URL
  const property = data.find(item => item.id === id);  // Trouve le bien correspondant à l'ID

  if (!property) {
    return <h2>Bien non trouvé</h2>;  // Si le bien n'existe pas
  }

  // Définit des valeurs par défaut pour les propriétés potentiellement manquantes
  const tags = property.tags || [];
  const equipments = property.equipments || []; // Assurez-vous que le champ est bien 'equipments'

  return (
    <div className="presentation">
      <Carousel propertyId={property.id} />
      <div className="informations">
        <div className="presentation__title">
          <h2>{property.title}</h2>
          <h5>{property.location}</h5>
        </div>

        <div className="tags">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))
          ) : (
            <p>Aucun tag disponible</p>
          )}
        </div>

        <div className="people-container">
  <div className="host-container">
    <People 
      picture={property.host.picture}
      host={property.host.name}
    />
  </div>
  
  <div className="rating-container">
    <Rating rating={parseInt(property.rating, 10)} />
  </div>
</div>

        <div className="opener-container">
          <div className="opener-wrapper">
            <Opener 
              title="Description" 
              content={property.description || 'Aucune description disponible'} 
            />
          </div>

          <div className="opener-wrapper">
            <Opener 
              title="Équipements" 
              content={
                equipments.length > 0 ? (
                  <ul>
                    {equipments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>Aucun équipement disponible</p>
                )
              } 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;