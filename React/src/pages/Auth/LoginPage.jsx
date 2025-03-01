import React, { useContext, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { Link, useNavigate } from "react-router";

import AuthStyles from "./Auth.module.css";

import ReactIcon from "../../images/react.svg";

import Button from "../../components/Button";
import Loader from "../../components/Loader";

import { checkEmailRegex, checkPasswordRegex } from "../../utils/Regex";
import { storeToken } from "../../utils/LocalStorage";

import { AuthTypes } from "../../constants/AuthTypeOptions";

import { AppStateContext } from "../../context/AppStateContext/AppStateContext";

import toast, { Toaster } from "react-hot-toast";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: { value: "", isConditionsFulfilled: true },
    password: { value: "", isConditionsFulfilled: true },
  });
  const [authType, setAuthType] = useState(null);
  let { setIsLoading, isLoading, changeLoggedIn, changeLoginData } =
    useContext(AppStateContext);

  const { logIn, setLoggedIn } = useAuth();
  let navigate = useNavigate();

  //handling both field here
  function onChangeText(text, type) {
    let condition = true;
    if (type === "email") condition = checkEmailRegex(text);
    else condition = checkPasswordRegex(text);
    setFormData((prev) => {
      return {
        ...prev,
        [type]: { value: text, isConditionsFulfilled: condition },
      };
    });
  }
  async function onSubmit(event) {
    setIsLoading(true); //true
    event.preventDefault();
    let response = await logIn(formData.email.value, formData.password.value);

    if (response.StatusCode === 200) {
      setLoggedIn(true);
      storeToken(response.data.accessToken);
      navigate("/commonpageone", { replace: true });
    } else {
      setLoggedIn(false);
      toast.error(response.message);
    }
    setIsLoading(false); //false
  }
  return (
    <div className={AuthStyles.container}>
      <Toaster />
      {isLoading && <Loader />}
      <div className={AuthStyles.form}>
        <h1>
          React login
          <img src={ReactIcon} />
        </h1>
        <form onSubmit={onSubmit}>
          <div className={AuthStyles.dropdown_container}>
            <label htmlFor="auth-type"></label>
            <select
              id="auth-type"
              onChange={(event) => setAuthType(event.target.value)}
            >
              <option>Select type of Auth</option>
              {AuthTypes.map((authType) => (
                <option
                  key={authType.key}
                  value="Sesson"
                  disabled={authType.isDisabled}
                  className={authType.isDisabled ? AuthStyles.disabled : ""}
                >
                  {authType.name}
                </option>
              ))}
            </select>
          </div>
          <div className={AuthStyles.input_container}>
            <label className={AuthStyles.label_text} htmlFor="loginEmail">
              Enter your email
            </label>
            <input
              id="loginEmail"
              placeholder="ex - youremail@gmail.com"
              value={formData.email.value}
              onChange={(e) => onChangeText(e.target.value, "email")}
              className={
                formData.email.isConditionsFulfilled
                  ? ""
                  : AuthStyles.inputInvalid
              }
              required
            />
            {!formData.email.isConditionsFulfilled && (
              <span className={AuthStyles.errorMessage}>
                Please enter valid email
              </span>
            )}
          </div>
          <div className={AuthStyles.input_container}>
            <label htmlFor="loginPassword" className={AuthStyles.label_text}>
              Enter your password
            </label>
            <input
              id="loginPassword"
              placeholder="secret password @123"
              value={formData.password.value}
              onChange={(e) => onChangeText(e.target.value, "password")}
              className={
                formData.password.isConditionsFulfilled
                  ? ""
                  : AuthStyles.inputInvalid
              }
              required
            />
            {/* {!formData.password.isConditionsFulfilled && (
              <div className={AuthStyles.errorMessage}>
                <span>1. At least one uppercase letter</span>
                <span>2. At least one number</span>
                <span>3. At least one special character</span>
              </div>
            )} */}
          </div>
          <Button placeholder={"Login"} />
        </form>
        <span>
          New user?{" "}
          <Link to="/signup" replace>
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
