import React from "react";
import AuthContextProvider from "./AuthContext/AuthContextProvider";
import AppStateContextProvider from "./AppStateContext/AppStateContextProvider";
function AppContext({ children }) {
  return (
    <AppStateContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </AppStateContextProvider>
  );
}

export default AppContext;
