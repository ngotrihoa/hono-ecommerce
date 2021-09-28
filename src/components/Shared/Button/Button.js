import React from 'react';

function Button(props) {
  return (
    <button
      className={`button ${props.className ? props.className : ''} ${
        props.size ? props.size : ''
      }`}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.children}
    </button>
  );
}

export default Button;
