import React from "react";
import buttonStyles from "./Button.module.css";
function Button({ placeholder }) {
  return <button className={buttonStyles.button_container}>{placeholder}</button>;
}

export default Button;
