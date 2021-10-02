import React from 'react';
import Slider from 'react-slick';
import SVGIcon from '../Shared/SVGIcon/SVGIcon';

function MainSlider(props) {
  function Arrow(props) {
    const { className, onClick, icon } = props;
    return (
      <div className={className} onClick={onClick}>
        {icon}
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <Arrow
        className="slick-arrow"
        icon={<SVGIcon name="rightLengthArrow" width="15px" height="24px" />}
      />
    ),
    prevArrow: (
      <Arrow
        className="slick-arrow"
        icon={<SVGIcon name="leftLengthArrow" width="15px" height="24px" />}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{props.children}</Slider>;
}

export default MainSlider;
