import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/images/logo_black.png';
import SVGIcon from '../Shared/SVGIcon/SVGIcon';
import RightBar from './RightBar';
function Header(props) {
  const [openRightBar, setOpenRightBar] = useState(false);

  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef && headerRef.current) {
      window.addEventListener('scroll', () => {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          headerRef.current.classList.add('shirk');
        } else headerRef.current.classList.remove('shirk');
      });
      return () => {
        window.removeEventListener('scroll');
      };
    }
  }, []);

  const handleOpenRightBar = () => {
    setOpenRightBar(true);
  };
  const handleCloseRightBar = () => {
    setOpenRightBar(false);
  };
  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="header__container">
          <div className="header__content">
            <Link to="/" className="header__logo">
              <img src={logoBlack} alt="" />
            </Link>
            <div className="header__nav">
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
            <div className="header__action">
              <div className="header__action__item">
                <div className="header__action__item__count">3</div>
                <SVGIcon name="wishlist" />
              </div>
              <div className="header__action__item">
                <div className="header__action__item__count">3</div>
                <SVGIcon name="bag" />
              </div>
              <div className="header__action__item">
                <SVGIcon name="search" />
              </div>
              <div
                className="header__action__item header__action__item--menu"
                onClick={handleOpenRightBar}
              >
                <SVGIcon name="menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {openRightBar && <RightBar onClose={handleCloseRightBar} />}
    </>
  );
}

export default Header;
