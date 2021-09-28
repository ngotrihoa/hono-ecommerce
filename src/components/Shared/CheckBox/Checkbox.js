import React, { useRef } from 'react';

function Checkbox(props) {
  const checkboxRef = useRef(null);
  const handleChange = () => {
    if (props.onFilter) {
      props.onFilter(checkboxRef.current);
    }
  };

  return (
    <label
      className="custom-checkbox"
      onClick={props.onClick ? props.onClick : null}
    >
      <input
        type="checkbox"
        ref={checkboxRef}
        onChange={handleChange}
        checked={props.checked}
      />
      <span className="custom-checkbox__checkmark"></span>
      {props.children}
    </label>
  );
}

export default Checkbox;
