import React from "react";

function InputField({ name, label, placeholder, value, onChange, error }) {
  return (
    <div className="mb-3 position-relative">
      <label className="form-label mb-0">{label}</label>
      <input
        name={name}
        className={`form-control col ${error && "is-invalid"}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <span className="text-danger small position-absolute start-5">
          {error}
        </span>
      )}
    </div>
  );
}

export default InputField;
