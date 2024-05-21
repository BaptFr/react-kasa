import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home-page.jsx';
import About from './pages/about-page.jsx';
import NotFound from './pages/error-page.jsx';
import Logement from './pages/logement-page.jsx';
import Layout from './components/layout/layout.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
          <Routes>
            <Route path="/kasa/" element={<Home />} />
            <Route path="/kasa/about" element={<About />} />
            <Route path="/kasa/logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />   
          </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
