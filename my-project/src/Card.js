// src/Card.js
import React from 'react';
import './cards.css';
import './styles.css';  // Importing the styles
import circleIcon from './img/circle.svg';

const Card = ({ frontImage, title, description }) => {
  return (
    <div className="group">
      <div className="card1">
        <div className="card-side">
          <div className="circle"><img src={circleIcon} alt="Icon" /></div>
          <div className="image-content">
            <img src={frontImage} alt="Card Front" />
          </div>
        </div>
        <div className="card-side back">
          <div className="circle"><img src={circleIcon} alt="Icon" /></div>
          <div className="text-content">
            <h2 className="text-black">{title}</h2>
            <div className="divider"></div>
            <p className="text-black">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
