import React, { useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { getToken } from "../utils/LocalStorage";

function ProtectedRoutes({ AuthorizedRoles }) {
  // roles,isLoggedIn
  let roles = ["USER"];
  let { isLoggedIn } = useAuth();
  let token = getToken();
  let navigate = useNavigate();

  let hasPermission = roles.find((role) => AuthorizedRoles.includes(role));

  useEffect(() => {
    if (!isLoggedIn && token === null) navigate("/");
  }, [isLoggedIn]);

  return hasPermission && isLoggedIn ? <Outlet /> : <Navigate to={"/"} />;
}

export default ProtectedRoutes;
