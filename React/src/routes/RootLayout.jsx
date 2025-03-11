import React, { useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/Header";
import { getToken } from "../utils/LocalStorage";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
