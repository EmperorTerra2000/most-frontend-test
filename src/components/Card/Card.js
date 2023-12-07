import './Card.css';

import { Link } from 'react-router-dom';
import React from 'react';

function Card({ data, cardsShop, clickShopCard }) {
  const ref = React.useRef(null);
  const pathUrl = '/product/?id=' + data.id;

  React.useEffect(() => {
    if (cardsShop) {
      const result = cardsShop.find((item, index) => {
        return item.id === data.id;
      });

      if (result) {
        ref.current.innerText = 'Добавлен';
        ref.current.setAttribute('disabled', 'disabled');
      }
    }
  }, [cardsShop]);

  const styleLinkMoreDetails = {
    textDecoration: 'none',
    display: 'block',
    color: '#444444',
  };

  const styleLinkImg = {
    display: 'block',
    height: '40%',
    textDecoration: 'none',
    color: '#444444',
  };

  const styleLinkName = {
    display: 'block',
    textDecoration: 'none',
    color: '#444444',
  };

  return (
    <>
      <figure className="card">
        <Link to={pathUrl} style={styleLinkImg}>
          <img className="card__img" src={data.images[0]} alt={data.title} />{' '}
        </Link>
        <figcaption className="card__block">
          <Link to={pathUrl} style={styleLinkName}>
            <p className="card__name">{data.title}</p>
          </Link>
          <p className="card__price">
            {data.price}$ (-{data.discountPercentage}%)
          </p>
          <div className="card__section">
            <Link to={pathUrl} style={styleLinkMoreDetails}>
              Подробнее
            </Link>
          </div>
          <button
            className="card__section"
            ref={ref}
            onClick={() => {
              clickShopCard(data);
            }}>
            В корзину
          </button>
        </figcaption>
      </figure>
    </>
  );
}

export default Card;
