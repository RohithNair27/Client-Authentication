import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

import AuthStyles from "./Auth.module.css";

import ReactIcon from "../../images/react.svg";

import Button from "../../components/Button";
import Loader from "../../components/Loader";

import toast, { Toaster } from "react-hot-toast";

import { checkEmailRegex, checkPasswordRegex } from "../../utils/Regex";
import { storeToken } from "../../utils/LocalStorage";

import { AppStateContext } from "../../context/AppStateContext/AppStateContext";

import { useAuth } from "../../hooks/useAuth";

import { AuthTypes } from "../../constants/AuthTypeOptions";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: { value: "", isConditionsFulfilled: true },
    password: { value: "", isConditionsFulfilled: true },
    repassword: { value: "", isConditionsFulfilled: true },
    role: "USER",
  });
  let { setIsLoading } = useContext(AppStateContext);

  let { signUp, logIn, setLoggedIn } = useAuth();

  let navigate = useNavigate();

  function onChangeText(text, type) {
    let condition = true;
    if (type === "email") condition = checkEmailRegex(text);
    else if (type === "repassword")
      condition = formData.password.value === text;
    else condition = checkPasswordRegex(text);
    setFormData((prev) => {
      return {
        ...prev,
        [type]: { value: text, isConditionsFulfilled: condition },
      };
    });
  }
  function onRoleSelect(selectedRole) {
    setFormData((prev) => {
      return {
        ...prev,
        role: selectedRole,
      };
    });
  }

  async function onSubmit(event) {
    setIsLoading(true);
    console.log("here");
    event.preventDefault();
    let response = await signUp(
      formData.email.value,
      formData.password.value,
      formData.role
    );
    if (response.StatusCode === 200) {
      toast.success(response.message);
      let loginResponse = await logIn(
        formData.email.value,
        formData.password.value
      );
      storeToken(loginResponse.data.accessToken);
      navigate("/commonpageone", { replace: true });
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      toast.error(response.message);
    }
    setIsLoading(false);
  }
  return (
    <div className={AuthStyles.container}>
      <div className={AuthStyles.form}>
        <h1>
          React Signup <img src={ReactIcon} />
        </h1>
        <form onSubmit={(event) => onSubmit(event)}>
          <div className={AuthStyles.dropdown_container}>
            <select>
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
            <label className={AuthStyles.label_text}>Enter your email</label>
            <input
              placeholder="ex - youremail@gmail.com"
              value={formData.email.value}
              required
              type="email"
              onChange={(e) => onChangeText(e.target.value, "email")}
              className={
                formData.email.isConditionsFulfilled
                  ? ""
                  : AuthStyles.inputInvalid
              }
            />
            {!formData.email.isConditionsFulfilled && (
              <span className={AuthStyles.errorMessage}>
                Please enter valid email
              </span>
            )}
          </div>
          <div className={AuthStyles.input_container}>
            <label className={AuthStyles.label_text}>Enter your password</label>
            <input
              placeholder="secret password @123"
              value={formData.password.value}
              required
              onChange={(e) => onChangeText(e.target.value, "password")}
              className={
                formData.password.isConditionsFulfilled
                  ? ""
                  : AuthStyles.inputInvalid
              }
            />
            {!formData.password.isConditionsFulfilled && (
              <div className={AuthStyles.errorMessage}>
                <span>1. At least one uppercase letter</span>
                <span>2. At least one number</span>
                <span>3. At least one special character</span>
              </div>
            )}
          </div>
          <div className={AuthStyles.input_container}>
            <label className={AuthStyles.label_text}>Re enter password</label>
            <input
              placeholder="secret password @123"
              value={formData.repassword.value}
              required
              onChange={(e) => onChangeText(e.target.value, "repassword")}
              className={
                formData.repassword.isConditionsFulfilled
                  ? ""
                  : AuthStyles.inputInvalid
              }
            />
            {!formData.repassword.isConditionsFulfilled && (
              <div className={AuthStyles.errorMessage}>
                <span>Password does not match</span>
              </div>
            )}
          </div>
          <div className={AuthStyles.radioButtonContainer}>
            <section>
              <label htmlFor="admin-role">Admin</label>
              <input
                type="radio"
                id="admin-role"
                name="role"
                checked={formData.role === "ADMIN"}
                onChange={() => onRoleSelect("ADMIN")}
              />
            </section>
            <section>
              <label htmlFor="user-role">User</label>
              <input
                type="radio"
                id="user-role"
                name="role"
                checked={formData.role === "USER"}
                onChange={() => onRoleSelect("USER")}
              />
            </section>
          </div>
          <Button placeholder={"Sign up"} type={"submit"} />
        </form>
        <span>
          Old user?{" "}
          <Link to="/" replace>
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignupPage;
