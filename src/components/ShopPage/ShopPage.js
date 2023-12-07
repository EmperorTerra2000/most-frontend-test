import './ShopPage.css';

import React from 'react';
import CardShop from '../CardShop/CardShop';

function ShopPage({ cardsShop, handleDeleteCardShop }) {
  let sumPrice = 0;

  cardsShop.forEach((el) => {
    sumPrice += el.price;
  });

  return (
    <>
      <section className="shop-page">
        <div className="shop-page__content page__spacing">
          <div className="shop-page__header">
            <p className="shop-page__count">Количество товаров: {cardsShop.length}</p>
            <p className="shop-page__sum">Общая сумма: {sumPrice} $</p>
          </div>
          <div className="shop-page__list">
            <ul className="shop-page-content__list">
              {cardsShop &&
                cardsShop.map((item, index) => (
                  <CardShop
                    key={item.id}
                    data={item}
                    cardsShop={cardsShop}
                    handleDeleteCardShop={handleDeleteCardShop}
                  />
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;
