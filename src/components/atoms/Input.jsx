import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, name, required, min }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      className="atom-input"
    />
  );
};

export default Input;