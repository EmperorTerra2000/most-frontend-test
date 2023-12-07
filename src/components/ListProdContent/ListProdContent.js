import './ListProdContent.css';

import React from 'react';
import Card from '../Card/Card';

function ListProdContent({ cards, cardsShop, handleClickShopCard }) {
  return (
    <>
      <section className="list-prod-content">
        <div className="list-prod-content__content">
          <ul className="list-prod-content__list">
            {cards &&
              cards.map((item, index) => (
                <Card
                  key={item.id}
                  data={item}
                  cardsShop={cardsShop}
                  clickShopCard={handleClickShopCard}
                />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ListProdContent;
