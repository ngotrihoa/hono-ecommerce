import React from 'react';

function SideBarItem(props) {
  return (
    <div className="sidebar__item">
      {props.title && <div className="sidebar__item__title">{props.title}</div>}
      <div className="sidebar__item__content">{props.children}</div>
    </div>
  );
}

export default SideBarItem;
