import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Shared/Modal/Modal';
import SVGIcon from '../Shared/SVGIcon/SVGIcon';

function AddedSuccess({ product, onClose, ...rest }) {
  return (
    <Modal onClose={onClose}>
      <div className="added-success" {...rest}>
        <div className="close-modal" onClick={onClose}>
          <SVGIcon name="close" width="10px" />
        </div>
        <div className="added-success__content">
          <div className="added-success__left">
            <div className="added-success__left__img">
              <img src={product.images[0]} alt="" />
            </div>
            <div className="added-success__left__action">
              <div className="added-success__left__action__notify">
                <span className="icon"></span>
                Added to cart successfully!
              </div>

              <div className="added-success__left__action__button">
                <Link to="/cart" className="button">
                  View Cart
                </Link>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
          <div className="added-success__right">
            <p>There are 5 items in your cart.</p>
            <p>
              Total price: <span>$187.00</span>
            </p>
            <Link to="#" onClick={onClose}>
              continue to shopping
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AddedSuccess;
