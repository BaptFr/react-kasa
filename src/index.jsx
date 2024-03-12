import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import NotFound from './pages/error.jsx';
import Logement from './pages/logement.jsx';
import Layout from './components/layout.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="*" element={<NotFound />} />   
        </Routes>
      </div>
      </Layout>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

