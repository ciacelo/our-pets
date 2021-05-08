import React from 'react';
import './input.scss';

const Input = ({
  label,
  placeholder,
  value,
  type,
  name,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="input-label-form">
      <label className="label-form" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        className="input-form"
        onBlur={onBlur}
      />
      {error && <p className="alert-error-form">{error}</p>}
    </div>
  );
};

export default Input;
