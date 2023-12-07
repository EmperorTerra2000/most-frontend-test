import './App.css';
import '../defaultStyle.css';
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Header from '../Header/Header';
import ListProd from '../ListProd/ListProd';
import SignInPage from '../SignInPage/SignInPage';
import ProductPage from '../ProductPage/ProductPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import ShopPage from '../ShopPage/ShopPage';
import Footer from '../Footer/Footer';
import api from '../../utils/Api';

function App() {
  const history = useHistory();
  const [profileData, setProfileData] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardsView, setCardsView] = React.useState([]);
  const [cardsShop, setCardsShop] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    tokenCheck();
    handleImportCards();

    if (localStorage.getItem('cardsShop')) {
      const newCardsShop = JSON.parse(localStorage.getItem('cardsShop'));

      setCardsShop(newCardsShop);
    } else {
      localStorage.setItem('cardsShop', '[]');
    }
  }, []);

  function handleImportCards() {
    api.getCards().then((cards) => {
      setCards(cards.products);
      setCardsView(cards.products);
    });
  }

  function handleDeleteCardShop(id) {
    const newCardsShop = cardsShop.filter((item) => item.id !== id);

    localStorage.setItem('cardsShop', JSON.stringify(newCardsShop));
    setCardsShop(newCardsShop);
  }

  function handleClickShopCard(data) {
    const newCardsShop = JSON.parse(localStorage.getItem('cardsShop'));
    newCardsShop.push(data);
    localStorage.setItem('cardsShop', JSON.stringify(newCardsShop));
    setCardsShop(newCardsShop);
  }

  function tokenCheck() {
    //если у пользователя есть токен в LocalStorage,
    //эта функция проверит, действующий ли он или нет
    const token = localStorage.getItem('token');

    if (token) {
      //проверим токен
      api
        .getContent(token)
        .then((res) => {
          if (res) {
            //авторизуем пользователя
            handleLogin();
          }
        })
        .catch((err) => {
          console.log(err);
          handleSignOut();
          //удаляем токен из локалстореджа если он не валидный
          localStorage.removeItem('token');
        });
    } else {
      handleSignOut();
    }
  }

  //изменяет стейт при успешной авторизации пользователя
  //вызывается из компонента SignInPage
  function handleLogin() {
    setLoggedIn(true);
  }

  function handleSignOut() {
    setLoggedIn(false);
  }

  return (
    <div className="page page__spacing">
      <Header loggedIn={loggedIn} amountShop={cardsShop.length} />
      <Switch>
        <Route path="/" exact>
          <ListProd
            cards={cards}
            cardsView={cardsView}
            cardsShop={cardsShop}
            setCardsView={setCardsView}
            handleClickShopCard={handleClickShopCard}
          />
        </Route>
        <Route path="/signin" exact>
          <SignInPage
            loggedIn={loggedIn}
            history={history}
            handleLogin={handleLogin}
            setProfileData={setProfileData}
          />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage profileData={profileData} />
        </Route>
        <Route path="/shop" exact>
          <ShopPage cardsShop={cardsShop} handleDeleteCardShop={handleDeleteCardShop} />
        </Route>
        <Route path="/product/*">
          <ProductPage />
        </Route>
        <Route path="*">
          <div>Not found App</div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
