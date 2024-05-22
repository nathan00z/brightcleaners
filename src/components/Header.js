// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from './img/Logo.svg'; // Ensure this path is correct
import './nav-bar.css'; // Ensure this file exists and is correctly imported

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
          <li className="menu-item">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
