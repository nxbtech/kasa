import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.scss';

const Error = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="not-found__link">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Error;