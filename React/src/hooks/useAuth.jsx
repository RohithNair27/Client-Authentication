import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { AppStateContext } from "../context/AppStateContext/AppStateContext";

import { currentUser } from "../services/Endpoints";

export function useAuth() {
  const {
    isLoggedIn,
    signUp,
    userData,
    logIn,
    setLoggedIn,
    setUserData,
    checkLogedInStatus,
  } = useContext(AuthContext);
  let { isLoading, setIsLoading } = useContext(AppStateContext);

  return {
    isLoggedIn,
    signUp,
    userData,
    logIn,
    setLoggedIn,
    setUserData,
    checkLogedInStatus,
  };
}
