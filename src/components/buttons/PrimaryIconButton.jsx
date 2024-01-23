import * as React from 'react';
import './Button.css'
const PrimaryIconButton = ({ children, className = '', onClick }) => {
  return (
    <button
      type="button"
      className={`Primary-icon-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryIconButton;
