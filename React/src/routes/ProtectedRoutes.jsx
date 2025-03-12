import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoutes({ AuthorizedRoles }) {
  let { isLoggedIn, userData } = useAuth();
  let hasPermission = userData.roles?.find((role) =>
    AuthorizedRoles.includes(role)
  );

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (!hasPermission) {
    return <Navigate to="unauthorized" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
