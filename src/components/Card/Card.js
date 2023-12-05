import './Card.css';

import { Link } from 'react-router-dom';

function Card({ data }) {
  const pathUrl = '/product/?key=' + data.id;

  const styleLinkMoreDetails = {
    textDecoration: 'none',
    display: 'block',
    color: '#444444',
    fontSize: '17px',
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
        </figcaption>
      </figure>
    </>
  );
}

export default Card;
