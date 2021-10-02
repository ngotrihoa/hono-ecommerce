import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={`modal ${props.position ? props.position : ''}`}>
      {props.children}
    </div>
  );
};

function Modal({ position, onClose, children, ...rest }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('overlays-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay position={position} {...rest}>
          {children}
        </ModalOverlay>,
        document.getElementById('overlays-root')
      )}
    </>
  );
}

export default Modal;
