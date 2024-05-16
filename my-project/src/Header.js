// src/Header.js
import React from 'react';
import './styles.css';  // Importing the styles
import logo from './img/Logo.svg';
import tabImage from './img/tab.svg';

const Header = () => {
  return (
    <header className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <img src={logo} className="w-38 h-16 mr-2" alt="Home" />
        </div>
        <nav className="flex items-center h-full">
          <ul className="flex h-full space-x-0">
            {['Home', 'About', 'Services', 'Contact'].map((text) => (
              <li className="h-full" key={text}>
                <button className="square-button h-full flex items-center justify-center relative transition-all duration-300 hover:translate-y-8 focus:outline-none">
                  <img src={tabImage} alt={text} className="w-full h-full absolute top-0 left-0" />
                  <span className="relative z-10 text-black">{text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
