import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from './img/Logo.svg'; // Ensure this path is correct
import './nav-bar.css'; // Ensure this file exists and is correctly imported
import buttonImage1 from './img/location.svg'; // Ensure this path is correct
import buttonImage2 from './img/phone.svg'; // Ensure this path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className="logo-img" alt="Home" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`menu-container ${menuOpen ? 'show' : ''}`}>
        <ul className="menu-horizontal">
          <li className="menu-item">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li className="menu-item">
            <Link to="location" smooth={true} duration={500}>
              Location
            </Link>
          </li>
          <li className="menu-button">
            <a href="https://maps.app.goo.gl/85Xovp1RnUkospT58" target="_blank" rel="noopener noreferrer">
              <img src={buttonImage1} alt="Button 1" className="nav-button" />
            </a>
          </li>
          <li className="menu-button">
          <a href="tel:+17134653407">
                          <img src={buttonImage2} alt="Button 2" className="nav-button" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
