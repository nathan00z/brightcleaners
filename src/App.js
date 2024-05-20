import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import drycleaningImage from './components/img/drycleaning.svg';
import tailoringImage from './components/img/tailoring.svg';
import shoeRepairImage from './components/img/shoe-repair.svg';
import Footer from './components/Footer';
import './components/cards.css';
import './components/app.css';
import './components/location.css';  // New CSS file for location section
import './components/contact.css';    // New CSS file for contact section

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
        <section id = "home" className="intro-section py-8">
          <div class="content">
          <h1 className="text-primary text-4xl font-bold mb-4 text-black">Welcome to Bright Cleaners</h1>
          <p className="text-secondary text-lg text-black">At Bright Cleaners, we pride ourselves on delivering exceptional garment and footwear care services. With a commitment to excellence and a focus on quality, we ensure your clothes and shoes receive the meticulous attention they deserve. Discover how our expert team can help you look and feel your best with our comprehensive range of services.</p>
          {/* <div className="paper"><img src={paperImage} alt="Decorative circle icon" /></div> */}
          </div>
        </section>

        <section id="services" className="services-section text-center py-12 bg-light text-white">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-8">Providing top-notch care for your clothes and shoes</p>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardsData.map(card => (
              <div className={`group card ${activeCard && activeCard !== card.id ? 'hidden' : ''} ${activeCard === card.id ? 'shift-left' : ''}`} key={card.id}>
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
        </section>

        <section id="location" className="location-section text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="location-header text-4xl font-bold mb-4 text-center">Our Location</h2>
            <div className="map-container mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110796.40281066156!2d-95.63778030273434!3d29.795344999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c423a3d2c387%3A0x383217f82cf1838a!2sBright%20Cleaners!5e0!3m2!1sen!2sus!4v1716040031132!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="hours-container">
              <h3 className="text-2xl font-semibold mb-4">Operating Hours</h3>
              <p>Sunday: Closed</p>
              <p>Monday: 9:00 AM - 6:00 PM</p>
              <p>Tuesday: 9:00 AM - 6:00 PM</p>
              <p>Wednesday: 9:00 AM - 6:00 PM</p>
              <p>Thursday: 9:00 AM - 6:00 PM</p>
              <p>Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: Closed</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="contact-header text-4xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-lg mb-8 text-center">Get in touch with us for any inquiries or to schedule a service. We're here to help!</p>
            <div className="contact-info text-center">
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> info@brightcleaners.com</p>
              <p><strong>Address:</strong> 123 Clean St, Clean City, CC 12345</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
