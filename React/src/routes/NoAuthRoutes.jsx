// Create a wrapper component for public pages
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

function NoAuthRoutes() {
  const { isLoggedIn, isLoading, userData } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/commonpageone" replace />;
  }

  return <Outlet />;
}

export default NoAuthRoutes;
