// src/Header.js
import React from 'react';
import './styles.css';  // Importing the styles
import './nav-bar.css';  // Importing the styles
import logo from './img/Logo.svg';

const Header = () => {
  return (
<div className="navbar">
  <div className="flex-1">
    <div className="logo">
      <img src={logo} className="logo-img" alt="Home" />
    </div>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className="menu-item"><a href="index.html">Home</a></li>
      <li className="menu-item"><a href="location.html">Location</a></li>
      <li className="menu-item"><a href="contact.html">Contact</a></li>
    </ul>
  </div>
</div>
  );
};

export default Header;
