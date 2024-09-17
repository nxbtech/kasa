import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.scss';

function Card({ id, pictures, title }) {
  return (
    <Link to={`/presentation/${id}`} className="card-link"> {/* Redirection vers /presentation avec l'ID */}
      <div className="container-card">
        <img src={pictures[0]} alt={title} className="container-card__image" />
        <h2 className="container-card__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;