import React from 'react';
import classes from './Radio.module.scss';
function RadioInput(props) {
  return (
    <label
      className={` ${classes['radio-custom']} ${
        props.className ? props.className : ''
      } `}
    >
      <input
        type="radio"
        name={props.name}
        onChange={props.onChange ? props.onChange : null}
        checked={props.checked}
      />
      <span className={`bg-${props.background}`}></span>
    </label>
  );
}

export default RadioInput;
