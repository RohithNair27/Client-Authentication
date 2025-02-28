import React, { useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { getToken } from "../utils/LocalStorage";

function ProtectedRoutes({ AuthorizedRoles }) {
  let roles = ["USER"];
  let { isLoggedIn } = useAuth();
  let token = getToken();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && token === null) navigate("/");
  }, []);

  return roles.find((role) => AuthorizedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
}

export default ProtectedRoutes;
