// src/Main.js
import React from 'react';
import Card from './Card';
import drycleaningImage from './img/drycleaning.svg';
import tailoringImage from './img/tailoring.svg';
import shoeRepairImage from './img/shoe-repair.svg';

const Main = () => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <Card 
          frontImage={drycleaningImage} 
          title="Professional Cleaning" 
          description="Our specialized dry cleaning techniques cater to a wide range of fabrics, from everyday wear to the most delicate garments. We use advanced, gentle cleaning solutions to remove stains and odors while preserving the integrity and appearance of your clothing." 
        />
        <Card 
          frontImage={tailoringImage} 
          title="Expert Tailoring" 
          description="Discover expert tailoring services that ensure your garments fit perfectly. Our skilled tailors handle everything from simple adjustments to complex alterations with precision and care." 
        />
        <Card 
          frontImage={shoeRepairImage} 
          title="Shoe Care" 
          description="Extend the life of your footwear with our professional shoe repair services. From heel replacements to sole repairs, our experts rejuvenate your shoes with high-quality craftsmanship." 
        />
      </div>
    </main>
  );
};

export default Main;
