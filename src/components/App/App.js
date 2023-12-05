import './App.css';
import '../defaultStyle.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ListProd from '../ListProd/ListProd';
import ProductPage from '../ProductPage/ProductPage';
import Footer from '../Footer/Footer';
import api from '../../utils/Api';

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    handleImportCards();
  }, []);

  function handleImportCards() {
    api.getCards().then((cards) => {
      setCards(cards.products);
    });
  }

  return (
    <div className="page page__spacing">
      <Header
        loggedIn={'loggedIn'}
        onNavMenu={'handleNavMenuClick'}
        isOpen={'isNavMenuOpen'}
        onClose={'closeNavMenu'}
      />

      <Routes>
        <Route path="/" element={<ListProd cards={cards} />} />
        <Route path="/product/*" element={<ProductPage />} />
        <Route path="*" element={<div>Not found App</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
