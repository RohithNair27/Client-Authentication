// Create a wrapper component for public pages
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

function NoAuthRoutes() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/commonpageone" replace />;
  }

  return <Outlet />;
}

export default NoAuthRoutes;
