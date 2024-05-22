import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import drycleaningImage1 from './components/img/drycleaning.svg';
import example1 from './components/gallery/example2.jpg';
import tailoringImage1 from './components/img/tailoring.svg';
import example2 from './components/gallery/example3.jpg';
import shoeRepairImage1 from './components/img/shoe-repair.svg';
// import shoeRepairImage2 from './components/gallery/intro-section-bg.png';
import Footer from './components/Footer';
import location from './components/img/location.svg';
import './components/cards.css';
import './components/app.css';
import './components/intro-sect.css';
import './components/location.css';
import './components/contact.css';
import logo from './components/img/logo3.svg';

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
      frontImage: drycleaningImage1,
      images: [example1, example2],
      title: 'Professional Cleaning',
      description:
        "We provide dry cleaning for all types of fabrics, from everyday wear to delicate garments. Our gentle techniques effectively remove stains and odors while preserving your clothing's integrity and appearance.",
    },
    {
      id: 2,
      frontImage: tailoringImage1,
      images: [example1, example2],
      title: 'Expert Tailoring',
      description:
        'Discover expert tailoring services that ensure your garments fit perfectly. Our skilled tailors handle everything from simple adjustments to complex alterations with precision and care.',
    },
    {
      id: 3,
      frontImage: shoeRepairImage1,
      images: [example1, example2],
      title: 'Shoe Care',
      description:
        'Extend the life of your footwear with our professional shoe repair services. From heel replacements to sole repairs, our experts rejuvenate your shoes with high-quality craftsmanship.',
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <section id="home" className="intro-section py-8">
          <div className="content">
            <img src={logo} className="intro-logo" alt="Bright Cleaners Logo" />
            <div className="dropoff-section mt-8 text-center">
              <h2 className="intr-child text-4xl font-bold mb-4 text-white">Ready to Drop Off?</h2>
              <button className="dropoff-btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Drop Off Now!</button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white text-black p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg">Drop Off Your Apparel for Service</h3>
                  <p className="py-4">Please fill out the information below to drop off your apparel for our services. We will take care of the rest!</p>
                  <form method="dialog" className="form-container flex flex-col items-center gap-4">
                    <label className="input-group input-group-vertical w-full">
                      <span className="text-black">Name</span>
                      <input type="text" className="input input-bordered w-full text-white bg-gray-800" placeholder="Your Name" required />
                    </label>
                    <label className="input-group input-group-vertical w-full">
                      <span className="text-black">Email</span>
                      <input type="email" className="input input-bordered w-full text-white bg-gray-800" placeholder="your.email@example.com" required />
                    </label>
                    <label className="input-group input-group-vertical w-full">
                      <span className="text-black">Contact Number</span>
                      <input type="tel" className="input input-bordered w-full text-white bg-gray-800" placeholder="Your Phone Number" required />
                    </label>
                    <label className="input-group input-group-vertical w-full">
                      <span className="text-black">Service Type</span>
                      <select className="select select-bordered w-full text-white bg-gray-800" required>
                        <option disabled selected>Select Service</option>
                        <option>Dry Cleaning</option>
                        <option>Tailoring</option>
                        <option>Shoe Repair</option>
                      </select>
                    </label>
                    <label className="input-group input-group-vertical w-full">
                      <span className="text-black">Instructions</span>
                      <textarea className="textarea textarea-bordered w-full text-white bg-gray-800" placeholder="Any special instructions for your service" rows="3"></textarea>
                    </label>
                    <div className="modal-action flex justify-center gap-4">
                      <button type="button" className="btn bg-black text-white hover:bg-gray-700" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                      <button type="submit" className="btn bg-white text-black border border-black hover:bg-gray-200">Submit</button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </section>

        <section id="services" className="services-section text-center bg-light text-white">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-8">Providing top-notch care for your clothes and shoes</p>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardsData.map((card) => (
              <div
                className={`group card ${activeCard && activeCard !== card.id ? 'hidden' : ''} ${
                  activeCard === card.id ? 'shift-left' : ''
                }`}
                key={card.id}
              >
                <Card
                  id={card.id}
                  frontImage={card.frontImage}
                  images={card.images}
                  title={card.title}
                  description={card.description}
                  onToggle={handleToggle}
                  isActive={activeCard === card.id}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="location-section text-black bg-white py-12">
          <h2 className="location-header text-4xl font-bold mb-8 text-center">Our Location</h2>

          <div className="container mx-auto px-4">
            <div className="content-container flex flex-wrap md:flex-nowrap justify-center md:justify-between mb-8">
              <div className="map-container w-full md:w-1/2 md:pr-4 mb-8 md:mb-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110796.40281066156!2d-95.63778030273434!3d29.795344999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c423a3d2c387%3A0x383217f82cf1838a!2sBright%20Cleaners!5e0!3m2!1sen!2sus!4v1716040031132!5m2!1sen!2sus"
                  width="900"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bright Cleaners Location"
                ></iframe>
              </div>
              <div className="hours-container md:w-1/2 md:pl-4">
                <div className="address-container flex flex-col items-center md:flex-row md:justify-center mt-8">
                  <div className="marker-icon-container mr-2 mb-2 md:mb-0">
                    <img src={location} alt="Marker Icon" className="h-6 w-6" />
                  </div>
                  <div className="address-details">
                    <h3 className="text-2xl font-semibold mb-2">Address</h3>
                    <p>1234 Clean St.</p>
                    <p>Houston, TX 77001</p>
                  </div>
                </div>
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
          </div>
        </section>

        <section id="contact" className="contact-section text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="contact-header text-4xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-lg mb-8 text-center">Get in touch with us for any inquiries or to schedule a service. We're here to help!</p>
            <div className="contact-info text-center">
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> info@brightcleaners.com
              </p>
              <p>
                <strong>Address:</strong> 123 Clean St, Clean City, CC 12345
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
