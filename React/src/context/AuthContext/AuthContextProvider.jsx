import React, { useEffect, useState, useContext } from "react";

import { currentUser } from "../../services/Endpoints";

import { AuthContext } from "./AuthContext";
import { AppStateContext } from "../AppStateContext/AppStateContext";

import { registerUser, loginUser } from "../../services/Endpoints";
import { getToken } from "../../utils/LocalStorage";

export default function AuthContextProvider({ children }) {
  let [isLoggedIn, setLoggedIn] = useState(false);
  let [userData, setUserData] = useState({
    email: "",
    userName: "",
    roles: [],
  });
  let { setIsLoading, isLoading } = useContext(AppStateContext);

  //signup
  async function signUp(email, password, role) {
    let response = await registerUser(email, password, role);
    try {
      if (response.statusCode === 200) {
        setLoggedIn(true);
        setUserData((prev) => {
          return {
            ...prev,
            email: response.data.user.email,
            userName: response.data.user.userName,
            roles: [...prev.roles, response.data.user.role],
          };
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

  // This is the login function
  async function logIn(email, password) {
    let response = await loginUser(email, password);
    if (response.statusCode === 200) {
      setLoggedIn(true);
      console.log(response.data.user.role, "role");
      setUserData((prev) => {
        return {
          ...prev,
          email: response.data.user.email,
          userName: response.data.user.username,
          roles: [...prev.roles, response.data.user.role],
        };
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

  // On relod, or coming back to the app
  async function checkLogedInStatus() {
    setIsLoading(true);
    let token = getToken();
    if (!token) {
      setLoggedIn(false);
    }
    try {
      let response = await currentUser(token);
      setUserData({
        email: response.data?.email,
        userName: response.data?.username,
        roles: [response.data?.role],
      });
      if (response.data.email) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const value = {
    isLoggedIn,
    signUp,
    userData,
    logIn,
    setLoggedIn,
    setUserData,
    checkLogedInStatus,
  };

  useEffect(() => {
    checkLogedInStatus();
  }, []);

  return <AuthContext value={value}>{children}</AuthContext>;
}
