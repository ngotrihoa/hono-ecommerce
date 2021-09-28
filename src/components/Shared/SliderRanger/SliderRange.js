import React, { useEffect, useState } from 'react';

let firstRender = true;

function SliderRange(props) {
  const { min = 0, max = 200, step, onChange, reset } = props;
  const [valueFirstSLider, setValueFirstSlider] = useState(min);
  const [valueSecondSLider, setValueSecondSlider] = useState(max);
  const percent1 = Math.ceil((valueFirstSLider * 100) / (max - min + 1));
  const percent2 = 100 - Math.ceil((valueSecondSLider * 100) / (max - min + 1));

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    if (onChange) {
      const timer = setTimeout(() => {
        onChange(valueFirstSLider, valueSecondSLider);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [onChange, valueFirstSLider, valueSecondSLider]);
  useEffect(() => {
    if (reset) {
      setValueFirstSlider(min);
      setValueSecondSlider(max);
    }
  }, [reset, max, min]);
  return (
    <>
      <div className="slider-range">
        <div className="slider-custom">
          <div className="slider-custom__track"></div>
          <div
            className="slider-custom__range"
            style={{ left: `${percent1}%`, right: `${percent2}%` }}
          ></div>
          <div
            className="slider-custom__thumb slider-custom__thumb-left"
            style={{
              left: `${percent1}%`,
              transform: 'translate(-0.6em, -5px)',
            }}
          ></div>
          <div
            className="slider-custom__thumb slider-custom__thumb-right"
            style={{ right: `${percent2}%` }}
          ></div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={valueFirstSLider}
          step={step}
          onInput={(e) => {
            setValueFirstSlider(
              Math.min(e.target.value, valueSecondSLider - 1)
            );
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={valueSecondSLider}
          step={step}
          onInput={(e) => {
            setValueSecondSlider(
              Math.max(e.target.value, valueFirstSLider + 1)
            );
          }}
        />
      </div>
      <div className="range-value">
        <div className="range-value__title">Price range: </div>
        <div className="ranger-value__value">
          <span>{valueFirstSLider}</span>
          <span> - </span>
          <span>{valueSecondSLider} </span>
        </div>
      </div>
    </>
  );
}

export default SliderRange;
