// src/components/Card.js
import React, { useState, useEffect } from 'react';
import circleImage from './img/circle.svg';
import './cards.css';

const Card = ({ id, frontImage, title, description, onToggle, isActive }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isActive) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }, [isActive]);

  const handleFlip = () => {
    if (!isActive) {
      setFlipped(!flipped);
    }
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle(id);
  };

  return (
    <div className={`group ${isActive ? 'shift-left no-margin' : ''}`}>
      <div className={`card1 ${flipped ? 'flipped' : ''} ${isActive ? 'disabled-hover' : ''}`} onClick={handleFlip}>
        <div className="card-side front">
          <div className="circle"><img src={circleImage} alt="Decorative circle icon" /></div>
          <div className="image-content">
            <img src={frontImage} alt={title} />
          </div>
        </div>
        <div className="card-side back">
          <div className="circle"><img src={circleImage} alt="Decorative circle icon" /></div>
          <div className="text-content">
            <h2 className="text-black title-font">{title}</h2>
            <div className="divider"></div>
            <p className="text-black description-font">{description}</p>
            <button id={`button-${id}`} className="button-text" onClick={handleToggle}>
              {isActive ? 'See less ←' : 'See more →'}
            </button>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="expanded-content show">
          <div className="circle2"><img src={circleImage} alt="Decorative circle icon" /></div>
  
        </div>
      )}
    </div>
  );
};

export default Card;
