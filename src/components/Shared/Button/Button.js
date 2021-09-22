import React from 'react';

function Button(props) {
  return (
    <button className={`button ${props.size ? props.size : ''}`}>
      {props.children}
    </button>
  );
}

export default Button;
