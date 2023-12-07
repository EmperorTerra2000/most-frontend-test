import './CardShop.css';

import { Link } from 'react-router-dom';
import React from 'react';

function CardShop({ data, handleDeleteCardShop }) {
  const pathUrl = '/product/?id=' + data.id;

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
      <figure className="card-shop">
        <Link to={pathUrl} style={styleLinkImg}>
          <img className="card-shop__img" src={data.images[0]} alt={data.title} />{' '}
        </Link>
        <figcaption className="card-shop__block">
          <Link to={pathUrl} style={styleLinkName}>
            <p className="card-shop__name">{data.title}</p>
          </Link>
          <p className="card-shop__price">
            {data.price}$ (-{data.discountPercentage}%)
          </p>
          <button
            className="card-shop__section"
            onClick={() => {
              handleDeleteCardShop(data.id);
            }}>
            Удалить
          </button>
        </figcaption>
      </figure>
    </>
  );
}

export default CardShop;
