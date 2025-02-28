import { useState } from "react";
import { AppStateContext } from "./AppStateContext";

export default function AppStateContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loggedInInfo, setIsLoggedInInfo] = useState({
    userName: null,
    email: null,
    role: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  function changeLoading() {
    setIsLoading((prev) => !prev);
  }
  function changeLoggedIn(currentState) {
    setIsLoggedIn(currentState);
  }
  function changeLoginData(username, email, role) {
    setIsLoggedInInfo({
      userName: username,
      email: email,
      role: role,
    });
  }
  return (
    <AppStateContext
      value={{
        changeLoading,
        isLoading,
        changeLoggedIn,
        isLoggedIn,
        changeLoginData,
        loggedInInfo,
      }}
    >
      {children}
    </AppStateContext>
  );
}
