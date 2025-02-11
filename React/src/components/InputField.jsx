import React from "react";
import InputFieldStyle from "./InputField.module.css";
function InputField({ placeholder, type, label, required, value, onChange,valueObjectKey }) {
  return (
    <div className={InputFieldStyle.container}>
      <label className={InputFieldStyle}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value,valueObjectKey)}
      />
    </div>
  );
}

export default InputField;
