import React from 'react';
import { Link } from 'react-router-dom';

function TagLink(props) {
  return (
    <Link to={props.to} className="tag-link">
      {props.children}
    </Link>
  );
}

export default TagLink;
