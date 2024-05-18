// src/components/Navbar.js
import React from 'react';
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
          <a href="#home" className="active">Services</a>
        </li>
        <li className="menu-item">
          <a href="#location">Location</a>
        </li>
        <li className="menu-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div style={{ flexBasis: 'auto' }}></div> {/* Dummy element to balance flex space */}
  </nav>
  );
};

export default Navbar;
