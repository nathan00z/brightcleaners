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
          <img src={logo} className="w-38 h-16 mr-2" alt="Home" />
        </div>  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Location</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
</div>
    
  );
};

export default Header;
