import * as React from 'react';
import './Button.css'


const PrimaryButton = ({ label, children, component, onClick, className = '' }) => {

  return (
    <button
      className={`Primary-button ${className}`}
      onClick={onClick}
    >
      {label ? label : children}
    </button>
  );
};

export default PrimaryButton;
