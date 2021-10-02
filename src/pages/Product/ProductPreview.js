import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import SVGIcon from '../../components/Shared/SVGIcon/SVGIcon';

function Arrow(props) {
  const { className, onClick, icon } = props;
  return (
    <div className={className} onClick={onClick}>
      {icon}
    </div>
  );
}

function ProductPreview(props) {
  const [currentSlide, setCurrentSlide] = useState(-1);

  const previewRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    nextArrow: (
      <Arrow
        className="slick-arrow"
        icon={<SVGIcon name="rightarrow" width="15px" height="24px" />}
      />
    ),
    prevArrow: (
      <Arrow
        className="slick-arrow"
        icon={<SVGIcon name="leftarrow" width="15px" height="24px" />}
      />
    ),
  };

  return (
    <div className="product-preview">
      <div className="product-preview__preview">
        <Slider
          {...settings}
          slidesToScroll={1}
          slidesToShow={1}
          arrows={false}
          ref={previewRef}
        >
          {props.product.images.map((item, index) => (
            <img key={index} src={item} alt={props.product.name} />
          ))}
        </Slider>
      </div>
      <div className="product-preview__slider">
        <Slider
          {...settings}
          slidesToScroll={1}
          slidesToShow={
            props.product.images.length < 4 ? props.product.images.length : 4
          }
        >
          {props.product.images.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt={props.product.name}
                className={currentSlide === index ? 'active-preview' : ''}
                onClick={() => {
                  previewRef.current.slickGoTo(index);
                  setCurrentSlide(index);
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductPreview;
