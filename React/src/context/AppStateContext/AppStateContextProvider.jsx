import { useState } from "react";
import { AppStateContext } from "./AppStateContext";
export const AppStateContextProvider = ({ children }) => {
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
  function changeLoggedIn() {
    setIsLoggedIn((prev) => !prev);
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
};
