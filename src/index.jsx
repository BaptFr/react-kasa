import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Error from './pages/error.jsx';
import Header from './components/header.jsx';
import Logement from './components/galerie.jsx';
import Footer from './components/footer.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

