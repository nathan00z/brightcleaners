// src/components/Navbar.js
import React from 'react';
import logo from './img/logo2.svg'; // Ensure this path is correct
import './nav-bar.css'; // Ensure this file exists and is correctly imported

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
    <aside className="items-center grid-flow-col">
    <img src={logo} className="logo-img" alt="Home" />
      <p>Copyright © 2024 - All right reserved</p>
    </aside> 
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    </nav>
  </footer>
  );
};

export default Footer;
