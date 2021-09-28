import React from 'react';
import { Link } from 'react-router-dom';
import payment from '../../assets/images/payment.png';
import Grid from '../Shared/Grid';
import SocialLink from '../SocialLink/SocialLink';

function Footer(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer">
      <div className="section__container">
        <div className="footer__top">
          <Grid col="4" mdCol="2" smCol="1">
            <h5 className="footer__top__item">
              <div className="footer__top__item__title">infomation</div>
              <ul className="footer__top__item__list">
                <li>
                  <Link to="/">Delivery Information</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Returns</Link>
                </li>
              </ul>
            </h5>
            <h5 className="footer__top__item">
              <div className="footer__top__item__title">my account</div>
              <ul className="footer__top__item__list">
                <li>
                  <Link to="/">My account</Link>
                </li>
                <li>
                  <Link to="/">Wishlist</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Frequently Questions</Link>
                </li>
                <li>
                  <Link to="/">Order History</Link>
                </li>
              </ul>
            </h5>
            <h5 className="footer__top__item">
              <div className="footer__top__item__title">categories</div>
              <ul className="footer__top__item__list">
                <li>
                  <Link to="/">Decorative</Link>
                </li>
                <li>
                  <Link to="/">Kitchen utensils</Link>
                </li>
                <li>
                  <Link to="/">Chair & Bar stools</Link>
                </li>
                <li>
                  <Link to="/">Sofas and Armchairs</Link>
                </li>
                <li>
                  <Link to="/">Interior lighting</Link>
                </li>
              </ul>
            </h5>
            <h5 className="footer__top__item">
              <div className="footer__top__item__title">about us</div>
              <div className="footer__top__item__list">
                <p>
                  We are a team of designers and developers that create high
                  quality Magento, Prestashop, Opencart.
                </p>
                <br />
                <p>Address: Your address goes here. Email: demo@example.com</p>
              </div>
            </h5>
          </Grid>
        </div>
        <div className="footer__center">
          <div className="footer__center__item">
            <div className="footer__center__item__title">Follow us</div>
            <div className="footer__center__item__content">
              <SocialLink
                icons={['facebook', 'twitter', 'instagram', 'linkedin']}
              />
            </div>
          </div>
          <div className="footer__center__item">
            <div className="footer__center__item__title">
              DON'T MISS OUT ON THE LATEST
            </div>
            <div className="footer__center__item__content">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your email address..." />
                <button>subscribe!</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__item">
            <p className="footer__bottom__item__copyright">
              © 2021
              <Link to="/"> HONO</Link>. Make with 💗 by
              <Link to="/"> HONO</Link>
            </p>
          </div>
          <div className="footer__bottom__item__payment">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
