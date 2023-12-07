import './ProductPage.css';

import api from '../../utils/Api';
import React from 'react';

function ProductPage() {
  const [cardData, setCardData] = React.useState({});

  const url = new URL(window.location.href);
  const idProduct = url.searchParams.get('id');

  React.useEffect(() => {
    handleImportCardId();
  }, []);

  function handleImportCardId() {
    api.getCardId(idProduct).then((card) => {
      setCardData(card);
    });
  }

  return (
    <>
      {Object.keys(cardData).length !== 0 && (
        <section className="product-page">
          <div className="product-page__content page__spacing">
            <div className="product-page__left">
              <div className="product-page__left-content">
                <img className="product-page__img" src={cardData.images[0]} alt={cardData.title} />
              </div>
            </div>
            <div className="product-page__right">
              <div className="product-page__right-content">
                <div className="product-page__right-icon">
                  <h3 className="product-page__manufacturer">{cardData.brand}</h3>
                </div>
                <h2 className="product-page__title">{cardData.title}</h2>
                <p className="product-page__description">{cardData.description}</p>
                <p className="product-page__price">
                  Цена: {cardData.price}$ (-{cardData.discountPercentage}%)
                </p>
                <button className="product-page__send">Добавить в корзину</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductPage;
