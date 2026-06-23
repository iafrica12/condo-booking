import React from 'react';
import Input from '../atoms/Input';

const FormField = ({ label, ...inputProps }) => {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      <Input {...inputProps} />
    </div>
  );
};

export default FormField;