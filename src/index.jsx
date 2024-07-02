import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import HomePage from './Homepage'; // Adjusted import with correct casing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
