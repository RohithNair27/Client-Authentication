import React, { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";

import { registerUser, loginUser } from "../../services/Endpoints";
import { getToken } from "../../utils/LocalStorage";

export default function AuthContextProvider({ children }) {
  let [isLoggedIn, setLoggedIn] = useState(false);
  let [userData, setUserData] = useState({ email: "", userName: "", role: "" });

  async function signUp(email, password, role) {
    let response = await registerUser(email, password, role);
    try {
      if (response.statusCode === 200) {
        setLoggedIn(true);
        setUserData({
          email: response.data.user.email,
          userName: response.data.user.userName,
          role: response.data.user.role,
        });
      } else {
        setLoggedIn(false);
      }
      return {
        StatusCode: response.statusCode,
        message: response.message,
        success: response.success,
      };
    } catch (error) {
      return {
        StatusCode: 500,
        message: error.message,
        success: false,
      };
    }
  }
  async function logIn(email, password) {
    let response = await loginUser(email, password);
    console.log(response);
    if (response.StatusCode === 200) {
      setLoggedIn(true);
      setUserData({
        email: response.user.email,
        userName: response.user.userName,
        role: response.user.role,
      });
    } else {
      setLoggedIn(false);
    }
    return {
      StatusCode: response.statusCode,
      message: response.message,
      success: response.success,
      data: response.data,
    };
  }
  function checkTokenStatus() {
    let token = getToken();
    if (token !== null) setLoggedIn(true);
    else setLoggedIn(false);
  }

  const value = { isLoggedIn, signUp, userData, logIn, setLoggedIn };

  useEffect(() => {
    checkTokenStatus();
  }, []);

  return <AuthContext value={value}>{children}</AuthContext>;
}
