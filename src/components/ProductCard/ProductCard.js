import React from 'react';
import { Link } from 'react-router-dom';
import Star from '../Shared/Star/Star';
import SVGIcon from '../Shared/SVGIcon/SVGIcon';

function ProductCard(props) {
  const { item, className } = props;
  const addDots = (string, limit) => {
    return string.substring(0, limit) + '...';
  };
  return (
    <div className={`product-card ${className ? className : ''}`}>
      <div className="product-card__box">
        <Link to={`/catalog/${item.slug}`} className="product-card__image">
          <img src={item.images[0]} alt="" />
          <img src={item.images[1]} alt="" />
        </Link>

        <div className="product-card__action">
          <div className="product-card__action__add">Add to cart</div>
          <div className="product-card__action__right">
            <div className="product-card__action__right__item">
              <SVGIcon name="search" width="18px" />
            </div>
            <Link to="/wishlist" className="product-card__action__right__item">
              <SVGIcon name="wishlist" width="18px" />
            </Link>
            <Link to="/compare" className="product-card__action__right__item">
              <SVGIcon name="compare" width="18px" />
            </Link>
          </div>
        </div>
      </div>
      <div className="product-card__content">
        <div className="product-card__content__left">
          <Link
            to={`/catalog/${item.slug}`}
            className="product-card__content__name"
          >
            {item.name}
          </Link>
          <div className="product-card__content__review-star">
            <Star stars={item.stars} disable={true} size="small" />
          </div>
        </div>
        <div className="product-card__content__right">
          {item?.oldPrice && (
            <span className="product-card__content__old-price">
              <del>{`$${item.oldPrice}`}</del>
              <span>{' - '}</span>
            </span>
          )}
          <span className="product-card__content__price">{`$${item.price}`}</span>
        </div>
        <p className="product-card__content__description">
          {addDots(item.description, 200)}
        </p>
        <div className="product-card__content__action">
          <Link to="#">Add to cart</Link>
          <Link to="#">
            <SVGIcon name="search" width="12px" />
          </Link>
          <Link to="/wishlist">
            <SVGIcon name="wishlist" width="12px" />
          </Link>
          <Link to="/compare">
            <SVGIcon name="compare" width="12px" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
