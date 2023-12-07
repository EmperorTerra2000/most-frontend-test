import './ListProd.css';

import ListProdContent from '../ListProdContent/ListProdContent';
import Filter from '../Filter/Filter';

import React from 'react';

function ListProd({ cards, cardsView, cardsShop, setCardsView, handleClickShopCard }) {
  return (
    <>
      <Filter cards={cards} cardsView={cardsView} setCardsView={setCardsView} />
      <ListProdContent
        cards={cardsView}
        cardsShop={cardsShop}
        handleClickShopCard={handleClickShopCard}
      />
    </>
  );
}

export default ListProd;
