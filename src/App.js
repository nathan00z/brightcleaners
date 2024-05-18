// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import drycleaningImage from './components/img/drycleaning.svg';
import tailoringImage from './components/img/tailoring.svg';
import shoeRepairImage from './components/img/shoe-repair.svg';
import Footer from './components/footer.js';
import './components/cards.css';

const App = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (id) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  const cardsData = [
    {
      id: 1,
      frontImage: drycleaningImage,
      title: 'Professional Cleaning',
      description: 'Our specialized dry cleaning techniques cater to a wide range of fabrics, from everyday wear to the most delicate garments. We use advanced, gentle cleaning solutions to remove stains and odors while preserving the integrity and appearance of your clothing.'
    },
    {
      id: 2,
      frontImage: tailoringImage,
      title: 'Expert Tailoring',
      description: 'Discover expert tailoring services that ensure your garments fit perfectly. Our skilled tailors handle everything from simple adjustments to complex alterations with precision and care.'
    },
    {
      id: 3,
      frontImage: shoeRepairImage,
      title: 'Shoe Care',
      description: 'Extend the life of your footwear with our professional shoe repair services. From heel replacements to sole repairs, our experts rejuvenate your shoes with high-quality craftsmanship.'
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container mx-auto px-4">
          {cardsData.map(card => (
            <div className={`group ${activeCard && activeCard !== card.id ? 'hidden' : ''} ${activeCard === card.id ? 'shift-left' : ''}`} key={card.id}>
              <Card
                id={card.id}
                frontImage={card.frontImage}
                title={card.title}
                description={card.description}
                onToggle={handleToggle}
                isActive={activeCard === card.id}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
