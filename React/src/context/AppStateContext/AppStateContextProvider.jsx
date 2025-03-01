import { useState } from "react";
import { AppStateContext } from "./AppStateContext";

export default function AppStateContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppStateContext
      value={{
        setIsLoading,
        isLoading,
      }}
    >
      {children}
    </AppStateContext>
  );
}
