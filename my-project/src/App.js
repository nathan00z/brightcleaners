// src/App.js
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './cards.css';
import './styles.css';  // Importing the styles

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
