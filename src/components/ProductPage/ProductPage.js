import './ProductPage.css';

import React from 'react';

function ProductPage(props) {
  return (
    <>
      {currentObj && (
        <section className="product-page">
          <div className="product-page__content page__spacing">
            <div className="product-page__left">
              <div className="product-page__left-content">
                <img
                  className="product-page__img"
                  src={currentObj.img}
                  alt={currentObj.translateRus}
                />
              </div>
            </div>
            <div className="product-page__right">
              <div className="product-page__right-content">
                <div className="product-page__right-icon">
                  {objManufact.img && (
                    <img
                      className="product-page__img-manufacturer"
                      src={objManufact.img}
                      alt="производитель"
                    />
                  )}
                  <h3 className="product-page__manufacturer">{currentObj.manufacturer}</h3>
                </div>
                <h2 className="product-page__title">{currentObj.translateRus}</h2>
                <p className="product-page__description">{currentObj.description}</p>
                {currentObj.specifications && (
                  <>
                    <p className="product-page__tech">Технические характеристики:</p>
                    <ul className="product-page__specifications">
                      {currentObj.specifications.map((el, index) => (
                        <li key={index} className="product-page__specific">
                          {el}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {currentObj.marking && currentObj.marking.length !== 0 && (
                  <div className="product-page__marking-block">
                    <p className="product-page__marking-text">Маркировки: </p>
                    <ul className="product-page__marking-list">
                      {currentObj.marking.map((el, index) => (
                        <li key={index} className="product-page__mark">
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className="product-page__send" onClick={props.onOpen}>
                  Отправить запрос
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductPage;
