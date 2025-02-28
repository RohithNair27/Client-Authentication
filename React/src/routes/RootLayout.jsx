import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/Header";
import { getToken } from "../utils/LocalStorage";

function RootLayout() {
  let token = getToken();
  let navigate = useNavigate();

  useEffect(() => {
    if (token !== null) navigate("/commonpageone");
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
