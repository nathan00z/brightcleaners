// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import logo from './img/Logo.svg'; // Ensure this path is correct
import './nav-bar.css'; // Ensure this file exists and is correctly imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className="logo-img" alt="Home" />
      </div>
      <div className="menu-container">
        <ul className="menu-horizontal">
          <li className="menu-item">
            <Link to="services" smooth={true} duration={500} className="active">
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
      <div style={{ flexBasis: 'auto' }}></div> {/* Dummy element to balance flex space */}
    </nav>
  );
};

export default Navbar;
