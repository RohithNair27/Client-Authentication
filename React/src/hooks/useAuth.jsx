import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

export function useAuth() {
  const { isLoggedIn, signUp, userData, logIn, setLoggedIn } =
    useContext(AuthContext);

  return { isLoggedIn, signUp, userData, logIn, setLoggedIn };
}
