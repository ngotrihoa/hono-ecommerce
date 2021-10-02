import React, { useState } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';

function Star(props) {
  const { stars, disable = false, size } = props;
  const [rating, setRating] = useState(stars);
  const [hovering, setHovering] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className={`list-star ${disable ? 'disable' : ''}`}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label
            key={index}
            className="list-star__item"
            onClick={() => disable || handleRating(ratingValue)}
          >
            <input type="radio" name="rating" value={ratingValue} />
            <SVGIcon
              name={'star'}
              fill={ratingValue <= (hovering || rating) ? '#b19361' : '#E1E1E1'}
              width={size === 'small' ? '12px' : '15px'}
              onMouseEnter={() => disable || setHovering(ratingValue)}
              onMouseLeave={() => disable || setHovering(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Star;
