import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
