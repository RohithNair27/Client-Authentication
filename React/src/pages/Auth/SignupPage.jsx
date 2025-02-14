import React from "react";
import { useState } from "react";
import { Link } from "react-router";

import AuthStyles from "./Auth.module.css";

import ReactIcon from "../../images/react.svg";

import Button from "../../components/Button";

function SignupPage() {
    const [formData, setFormData] = useState({
        email: { value: "", isConditionsFulfilled: true },
        password: { value: "", isConditionsFulfilled: true },
        repassword:{value:"",isConditionsFulfilled:true},
      });

  function onChangeText(text,field){
    console.log(text,field)
    setFormData({...formData,[field]:text})
  }
  return (
    <div className={AuthStyles.container}>
      <div className={AuthStyles.form}>
        <h1>
          React auth <img src={ReactIcon} />
        </h1>
        <form>
        <div className={AuthStyles.dropdown_container}>
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
          <div className={AuthStyles.input_container}>
            <label className={AuthStyles.label_text}>Re enter password</label>
            <input
              placeholder="secret password @123"
              value={formData.repassword.value}
              onChange={(e) => onChangeText(e.target.value, "repassword")}
              className={formData.repassword.isConditionsFulfilled?"":AuthStyles.inputInvalid}
            />
            {formData.repassword.value===formData.password.value &&(
              <div className={AuthStyles.errorMessage}>
                <span>Password does not match</span>
              </div>
            ) }
          </div>
        
            <Button placeholder={"Login"} />
        </form>
        <span>
          Old user? <Link to="/">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default SignupPage;
