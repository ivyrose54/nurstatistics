import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import './index.css'; // Make sure the path is correct
import App from './App'; // Ensure the path to App.js is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

