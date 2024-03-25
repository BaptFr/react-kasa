import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage.jsx';
import About from './pages/aboutPage.jsx';
import NotFound from './pages/errorPage.jsx';
import Logement from './pages/logementPage.jsx';
import Layout from './components/layout.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <div>
          <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />   
          </Routes>
        </div>
      </Layout>
    </Router>
  </React.StrictMode>
);
