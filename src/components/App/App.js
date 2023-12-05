import './App.css';
import '../defaultStyle.css';
import React from 'react';

import Header from '../Header/Header';
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
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
