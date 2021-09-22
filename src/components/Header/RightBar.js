import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Shared/Modal/Modal';
import SVGIcon from '../Shared/SVGIcon/SVGIcon';
import logoWhite from '../../assets/images/logo_white.png';
import SocialLink from '../SocialLink/SocialLink';

function RightBar(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className="right-bar">
        <div className="right-bar__close">
          <SVGIcon name="close" width="18px" onClick={props.onClose} />
        </div>
        <div className="right-bar__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="right-bar__logo" onClick={props.onClose}>
          <img src={logoWhite} alt="" />
        </Link>
        <div className="right-bar__info">
          <p>Address: Your address goes here.</p>
          <p>Call Us: 0123456789, 0123456789</p>
          <p>Email: demo@example.com</p>
        </div>
        <SocialLink icons={['facebook', 'twitter', 'instagram', 'linkedin']} />
        <ul className="right-bar__link">
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default RightBar;
