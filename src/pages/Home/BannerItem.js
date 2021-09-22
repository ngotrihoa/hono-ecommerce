import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Shared/Button/Button';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';

function BannerItem(props) {
  const { item, single, subtitle, className, icon, ...rest } = props;
  return (
    <div
      className={`banner__item banner-animation ${className ? className : ''} ${
        single ? 'single' : ''
      }`}
      {...rest}
    >
      <div className="banner__item__img">
        <img src={item.image} alt="" />
      </div>
      <div className="banner__item__content">
        <div className="banner__item__content__left">
          <h4 className="banner__item__content__title">{item.title}</h4>
          {subtitle && (
            <h5 className="banner__item__content__subtitle">{item.subtitle}</h5>
          )}
        </div>
        {single ? (
          <Button size="large">
            Discovery now{' '}
            <span>
              <SVGIcon name="rightLengthArrow" width="9px" height="14px" />
            </span>
          </Button>
        ) : (
          <Link to={item.path}>{icon ? icon : 'Shop now'}</Link>
        )}
      </div>
    </div>
  );
}

export default BannerItem;
