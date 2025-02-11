import React, { useEffect } from "react";
import { useState, useRef } from "react";

import { Link } from "react-router";

import AuthStyles from "./Auth.module.css";

import ReactIcon from "../../images/react.svg";

import InputField from "../../components/InputField";
import Button from "../../components/Button";

import { checkEmailRegex, checkPasswordRegex } from "../../utils/Regex";

function LoginPage() {
  const [isButtonsDisabled, setIsButtonDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: { value: "", isConditionsFulfilled: true },
    password: { value: "", isConditionsFulfilled: true },
  });

  const buttons = [
    {
      placeholder: "Signup with JWT",
      type: "primary",
      className: "btn-primary",
    },
    {
      placeholder: "Signup with cookies",
      type: "secondary",
      className: "btn-secondary",
    },
    {
      placeholder: "Signup with OAuth",
      type: "tertiary",
      className: "btn-tertiary",
    },
  ];

  //handling both field here
  function onChangeText(text, type) {
    if (type === "email") {
      let condition = checkEmailRegex(text);
      if (condition) {
        setFormData((prev)=>{
            return{...prev,email:{ value: text, isConditionsFulfilled: true }}
        })
      } else {
         setFormData((prev)=>{
            return{...prev,email:{ value: text, isConditionsFulfilled: false }}
        })
      }
    } else if (type === "password") {
      let condition = checkPasswordRegex(text);
      if (condition) {
        setFormData((prev)=>{
            return{...prev,password: { value: text, isConditionsFulfilled: true },}
        })
      } else {
        setFormData((prev)=>{
            return{...prev,password: { value: text, isConditionsFulfilled: false },}
        })
      }
    }
  }

  return (
    <div className={AuthStyles.container}>
      <div className={AuthStyles.form}>
        <h1>React auth <img src={ReactIcon}/></h1>
        <form>
            <div className={AuthStyles.dropdown_container}>
                <label></label>
                <select>
                    <option>Select type of Auth</option>
                    <option>Sesson Storage</option>
                    <option>Local Storage</option>
                    <option>O-auth</option>
                </select>
            </div>
          <div className={AuthStyles.input_container}>
            <label className={AuthStyles.label_text}>Enter your email</label>
            <input
              placeholder="ex - youremail@gmail.com"
              value={formData.email.value}
              onChange={(e) => onChangeText(e.target.value, "email")}
              className={formData.email.isConditionsFulfilled?"":AuthStyles.inputInvalid}
            />
            {!formData.email.isConditionsFulfilled && (
              <span className={AuthStyles.errorMessage}>
                Please enter valid email
              </span>
            ) }
          </div>
          <div className={AuthStyles.input_container}>
            <label className={AuthStyles.label_text}>Enter your password</label>
            <input
              placeholder="secret password @123"
              value={formData.password.value}
              onChange={(e) => onChangeText(e.target.value, "password")}
              className={formData.password.isConditionsFulfilled?"":AuthStyles.inputInvalid}
            />
            {!formData.password.isConditionsFulfilled &&(
              <div className={AuthStyles.errorMessage}>
                <span>1. At least one uppercase letter</span>
                <span>2. At least one number</span>
                <span>3. At least one special character</span>
              </div>
            ) }
          </div>
          <Button placeholder={"Login"} />
        </form>
        <span>
          New user? <Link to="/signup">Signup</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
