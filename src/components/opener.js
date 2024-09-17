import React, { useState } from 'react';
import '../styles/opener.scss';
import openerImage from '../img/opener_button.png';

function Opener({ title, content }) {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer la visibilité

    const handleClick = () => {
        setIsOpen(!isOpen); // Bascule l'état entre ouvert et fermé
    };

    return (
        <div>
            <div className='opener__container' onClick={handleClick}>
                <h1 className='opener__title'>{title}</h1>
                <img
                    src={openerImage} 
                    alt={`${title} icon`} 
                    className={`opener__icon ${isOpen ? 'opener__icon--open' : ''}`} 
                />
            </div>
            <div className={`opener__content ${isOpen ? 'opener__content--open' : ''}`}>
                {/* Remplacement de <p> par <div> pour éviter l'erreur d'imbrication */}
                <div>{content}</div>
            </div>
        </div>
    );
}

export default Opener;