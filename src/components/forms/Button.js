import React from 'react';
import './button.scss';

const Buttons = ({ children, ...props }) => {
  return (
    <>
      <button {...props} className="button-form">
        {children}
      </button>
    </>
  );
};

export default Buttons;
