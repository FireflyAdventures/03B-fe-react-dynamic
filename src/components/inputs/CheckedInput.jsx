import React from 'react';
import './Input.css';
const CheckedInput = ({ option, checked, onChange }) => {
    return (
        <input
            className=" question-checked-input"
            type="checkbox"
            name={option}
            id={option}
            checked={checked}
            onChange={onChange}
        />
    );
};

export default CheckedInput;
