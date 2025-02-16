import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { AppStateContext } from "../context/AppStateContext/AppStateContext";

function AdminRoute() {
  const { isLoggedIn } = useContext(AppStateContext);

  return false ? <Outlet /> : <Navigate to="/" />;
}

export default AdminRoute;
