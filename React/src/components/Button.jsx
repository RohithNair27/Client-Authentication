import React from "react";
import buttonStyles from "./Button.module.css";
function Button({ placeholder, type }) {
  return (
    <button className={buttonStyles.button_container} type={type}>
      {placeholder}
    </button>
  );
}

export default Button;
