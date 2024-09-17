// src/components/tag.js
import React from 'react';
import '../styles/tag.scss';

function Tag({ text }) {
    return (
        <div className="tag">
            <p className="tag__item">{text}</p>
        </div>
    );
}

export default Tag;