import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../Shared/SVGIcon/SVGIcon';

function SocialLink(props) {
  return (
    <div className="social">
      {props.icons.map((icon, index) => (
        <div className="social__item" key={index}>
          <Link to="/">
            <SVGIcon name={icon} height="16px" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SocialLink;
