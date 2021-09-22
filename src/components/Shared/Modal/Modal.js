import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('overlays-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays-root')
      )}
    </>
  );
}

export default Modal;
