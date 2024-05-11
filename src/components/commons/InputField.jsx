import React from "react";

function InputField({ label, placeholder, error, value, onChange, name }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        placeholder={placeholder}
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
        required
      />
      <span className="text-danger">{error}</span>
    </div>
  );
}

export default InputField;
