import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="section__container">
          <div className="breadcrumb__content">
            <h1 className="breadcrumb__content__title">{props.title}</h1>
            <ul className="breadcrumb__content__link">
              {props.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.href}>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
