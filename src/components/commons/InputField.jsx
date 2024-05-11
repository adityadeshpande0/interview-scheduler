import React from "react";

function InputField({ name,label, placeholder, value, onChange, error }) {
  return (
    <div className="mb-3 position-relative">
      <label className="form-label">{label}</label>
      <input
      name={name}
        // type="text"
        className={`form-control ${error && 'is-invalid'}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <span className="text-danger small position-absolute start-0 mt-1">
          {error}
        </span>
      )}
    </div>
  );
}

export default InputField;
