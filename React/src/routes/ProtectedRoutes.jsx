import React, { useContext, useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoutes({ AuthorizedRoles }) {
  let { isLoggedIn, userData } = useAuth();
  const location = useLocation();
  let hasPermission = userData.roles?.find((role) =>
    AuthorizedRoles.includes(role)
  );

  // console.log(location);

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!hasPermission) {
    return <Navigate to="unauthorized" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
