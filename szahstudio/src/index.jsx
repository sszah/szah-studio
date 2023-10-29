import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>
);

reportWebVitals();
