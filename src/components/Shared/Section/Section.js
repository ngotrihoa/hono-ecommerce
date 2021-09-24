import React from 'react';

function Section(props) {
  return (
    <div className={`section ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
}
export function SectionTitle(props) {
  return <div className="section-title">{props.children}</div>;
}
export function SectionBody(props) {
  return (
    <div className={`section-body ${props?.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
}

export default Section;
