import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddedSuccess from '../SuccessAdded/AddedSuccess';
import Star from '../Shared/Star/Star';
import SVGIcon from '../Shared/SVGIcon/SVGIcon';

function ProductCard(props) {
  const { item, className } = props;

  const [addAccess, setAddAccess] = useState(false);
  const handleClose = () => {
    setAddAccess(false);
  };
  const handleOpen = (e) => {
    setAddAccess(true);
  };

  const addDots = (string, limit) => {
    return string.substring(0, limit) + '...';
  };
  return (
    <>
      {addAccess && <AddedSuccess product={item} onClose={handleClose} />}
      <div className={`product-card ${className ? className : ''}`}>
        <div className="product-card__box">
          <Link to={`/catalog/${item.slug}`} className="product-card__image">
            <img src={item.images[0]} alt="" />
            <img src={item.images[1]} alt="" />
          </Link>

          <div className="product-card__action">
            <div
              className={`product-card__action__add ${
                item.stock < 1 ? 'empty' : ''
              }`}
            >
              <Link to="#" onClick={item.stock < 1 ? null : handleOpen}>
                {item.stock < 1 ? 'Out of stock' : 'Add to cart'}
              </Link>
            </div>
            <div className="product-card__action__right">
              <div className="product-card__action__right__item">
                <SVGIcon name="search" width="18px" />
              </div>
              <Link
                to="/wishlist"
                className="product-card__action__right__item"
              >
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
            <Link
              to="#"
              className={item.stock < 1 ? 'empty' : ''}
              onClick={item.stock < 1 ? null : handleOpen}
            >
              {item.stock < 1 ? 'Out of stock' : 'Add to cart'}
            </Link>
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
    </>
  );
}

export default ProductCard;
