// Create a wrapper component for public pages
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

function NoAuthRoutes() {
  const { isLoggedIn } = useAuth();

  const location = useLocation();

  // Get the stored location from state, if it exists
  const from = location.state?.from?.pathname || "/commonpageone";

  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
}

export default NoAuthRoutes;
