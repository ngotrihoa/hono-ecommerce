import React from 'react';
import Button from '../../components/Shared/Button/Button';

function HeroSliderItem(props) {
  return (
    <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
      <div className="hero-slider__item__content">
        <h4 className="hero-slider__item__subtitle">{props.item.subtitle}</h4>
        <h2 className="hero-slider__item__title">{props.item.title}</h2>
        <Button size="large">Shop Now</Button>
      </div>
      <div className="hero-slider__item__image">
        <img src={props.item.image} alt="" />
      </div>
    </div>
  );
}

export default HeroSliderItem;
