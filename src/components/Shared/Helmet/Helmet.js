import React, { useEffect } from 'react';

function Helmet(props) {
  document.title = props.title;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={props.className}>{props.children}</div>;
}

export default Helmet;
