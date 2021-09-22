import React, { useState, useEffect, useReducer } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import SVGIcon from '../SVGIcon/SVGIcon';

function Slider(props) {
  const { items } = props;
  const [currentItem, setCurrentItem] = useState(0);
  const [translate, setTranslate] = useState(0);

  const nextSlide = () => {
    const cur = currentItem + 1 === items.length - 3 ? 0 : currentItem + 1;
    setCurrentItem(cur);
    setTranslate(100 * cur * -1);
  };
  const prevSlide = () => {
    const cur = currentItem === 0 ? items.length - 1 - 3 : currentItem - 1;
    setCurrentItem(cur);
    setTranslate(100 * cur);
  };

  return (
    <div className="slider">
      <div className="slider__items">
        {items.map((product, index) => (
          <ProductCard
            key={index}
            item={product}
            style={{
              transform: `translate(${translate}%)`,
            }}
          />
        ))}
      </div>
      <div
        className="slider__arrow__item slider__arrow__item__left"
        onClick={prevSlide}
      >
        <SVGIcon name="leftLengthArrow" width="15px" height="24px" />
      </div>
      <div
        className="slider__arrow__item slider__arrow__item__right"
        onClick={nextSlide}
      >
        <SVGIcon name="rightLengthArrow" />
      </div>
    </div>
  );
}

export default Slider;
