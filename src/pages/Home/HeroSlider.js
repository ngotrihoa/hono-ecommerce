import React, { useState } from 'react';
import heroSliderData from '../../assets/fake-data/hero-slider';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';
import HeroSliderItem from './HeroSliderItem';

function HeroSlider(props) {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1 === heroSliderData.length ? 0 : ++prev));
  };
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSliderData.length - 1 : --prev));
  };
  const toSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="hero-slider">
      {heroSliderData.map((item, index) => (
        <HeroSliderItem
          key={index}
          active={index === activeSlide}
          item={item}
        />
      ))}
      <div className="hero-slider__control">
        <div className="hero-slider__control__dots">
          {heroSliderData.map((_, index) => (
            <div
              key={index}
              className={`hero-slider__control__dots__item ${
                index === activeSlide ? 'active' : ''
              }`}
              onClick={() => toSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="hero-slider__arrow">
        <div
          className=" hero-slider__arrow__item hero-slider__arrow__left"
          onClick={prevSlide}
        >
          <SVGIcon name="leftarrow" />
        </div>
        <div
          className="hero-slider__arrow__item hero-slider__arrow__right"
          onClick={nextSlide}
        >
          <SVGIcon name="rightarrow" />
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
