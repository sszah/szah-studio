import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './pages/Home.jsx';
import Input from './pages/Input.jsx';
import Project from './pages/Project.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/input" element={<Input />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </Router>
  
);

reportWebVitals();
