import React from 'react';
import Banner from '../components/banner';
import BannerImage from '../img/image-banner.png';
import Card from '../components/card';
import data from '../data/data.json';  // Importe les données du fichier JSON
import '../styles/home.scss';

const Home = () => {
  return (
    <>
      <Banner image={BannerImage} text="Chez vous, partout et ailleurs" />
      
      <div className="grid-cards">
        {data.map((item) => (
          <Card key={item.id} id={item.id} pictures={item.pictures} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default Home;