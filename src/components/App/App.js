import './App.css';
import '../defaultStyle.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ListProd from '../ListProd/ListProd';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page page__spacing">
      <Header
        loggedIn={'loggedIn'}
        onNavMenu={'handleNavMenuClick'}
        isOpen={'isNavMenuOpen'}
        onClose={'closeNavMenu'}
      />

      <Routes>
        <Route path="/" element={<ListProd />} />
        <Route path="/product/*" element={<ListProd />} />
        <Route path="*" element={<div>Not found App</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
