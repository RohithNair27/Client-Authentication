import React, { useContext } from "react";
import { Outlet, useNavigate, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { getToken } from "../utils/LocalStorage";
import { AppStateContext } from "../context/AppStateContext/AppStateContext";

import Loader from "../components/Loader";

function ProtectedRoutes({ AuthorizedRoles }) {
  let { isLoggedIn, userData } = useAuth();

  let { isLoading } = useContext(AppStateContext);

  let token = getToken();
  let navigate = useNavigate();

  let hasPermission = userData.roles?.find((role) =>
    AuthorizedRoles.includes(role)
  );

  if (!isLoggedIn && token === null) navigate("/", { replace: true });

  if (isLoading && userData.roles.length === 0) return <Loader />;
  else {
    return hasPermission && isLoggedIn && token !== null ? (
      <Outlet />
    ) : userData.userName !== "" ? (
      <Navigate to={"unauthorized"} replace />
    ) : (
      <Navigate to={"/"} replace />
    );
  }
}

export default ProtectedRoutes;
