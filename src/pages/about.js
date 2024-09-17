import React from 'react';
import Banner from '../components/banner';
import BannerImage from '../img/image-banner-2.png';
import Opener from '../components/opener';
import '../styles/about.scss'; // Importer le fichier CSS pour About

const About = () => {
  return (
    <div className="about">
      <Banner image={BannerImage} />
      <div className="about__openers">
        <Opener 
          title="Fiabilité" 
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
        />
        <Opener 
          title="Respect" 
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
        />
        <Opener 
          title="Service" 
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
        />
        <Opener 
          title="Responsabilité" 
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services." 
        />
      </div>
    </div>
  );
};

export default About;