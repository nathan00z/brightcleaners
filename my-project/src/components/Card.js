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
          <div className="carousel w-full h-full rounded-box">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" alt="Slide 1" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" alt="Slide 2" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" alt="Slide 3" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" alt="Slide 4" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
