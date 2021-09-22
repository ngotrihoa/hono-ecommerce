import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Helmet.prototype = {
  title: PropTypes.string.isRequired,
};

function Helmet(props) {
  document.title = props.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>{props.children}</div>;
}

export default Helmet;
