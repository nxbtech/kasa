import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Presentation from './pages/presentation';  // Ajoute le composant Presentation
import Header from './components/header';
import Footer from './components/footer';
import '../src/styles/global.scss'; // Importer le fichier CSS global

function App() {
  return (
    <Router>
      <div className="App">
        <Header />  {/* Le Header sera visible sur toutes les pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/presentation/:id" element={<Presentation />} />  {/* Route dynamique */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />  {/* Le Footer est en dehors du conteneur pour ne pas être limité en largeur */}
    </Router>
  );
}

export default App;