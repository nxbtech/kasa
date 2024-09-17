import React from 'react';
import { Link } from 'react-router-dom';  // Importe le composant Link de react-router-dom
import '../styles/header.scss';  // Correction du chemin de style
import Logo from '../img/kasa.png';  // Logo importé

function Header() {
    return (
        <div className="header">
            <div className="header__img">
                <img src={Logo} alt="Logo" /> {/* Affichage correct du logo */}
            </div>
            <div className="header__nav">
                <ul className="header__nav-list">
                    {/* Utilise Link pour la navigation */}
                    <li className="header__nav-item">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/about">A Propos</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

