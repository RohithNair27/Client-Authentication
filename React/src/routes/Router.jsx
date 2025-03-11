import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

import RootLayout from "./RootLayout";

import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "../pages/Auth/SignupPage";
import CommonPageOne from "../pages/commonPages/CommonPageOne";
import CommonPageTwo from "../pages/commonPages/CommonPageTwo";
import AdminPageOne from "../pages/AdminPages/AdminPageOne";
import AdminPageTwo from "../pages/AdminPages/AdminPageTwo";
import UserPagesOne from "../pages/UserPages/UserPagesOne";
import UserPagesTwo from "../pages/UserPages/UserPagesTwo";
import PageNotFound from "../pages/PageNotFound";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoutes from "./ProtectedRoutes";
import NoAuthRoutes from "./NoAuthRoutes";

function Router() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        //Common Routes
        {
          element: <NoAuthRoutes />,
          children: [
            { index: true, element: <LoginPage /> },
            { path: "signup", element: <SignupPage /> },
          ],
        },
        { path: "unauthorized", element: <Unauthorized /> },
        {
          element: <ProtectedRoutes AuthorizedRoles={["ADMIN", "USER"]} />,
          children: [
            { path: "commonpageone", element: <CommonPageOne /> },
            { path: "commonpagetwo", element: <CommonPageTwo /> },
          ],
        },
        //Admin protected routes
        {
          element: <ProtectedRoutes AuthorizedRoles={["ADMIN"]} />,
          children: [
            { path: "adminpageone", element: <AdminPageOne /> },
            { path: "adminpagetwo", element: <AdminPageTwo /> },
          ],
        },
        //User Protected routes
        {
          element: <ProtectedRoutes AuthorizedRoles={["USER"]} />,
          children: [
            { path: "userpageone", element: <UserPagesOne /> },
            { path: "userpagetwo", element: <UserPagesTwo /> },
          ],
        },
      ],
    },

    { path: "*", element: <PageNotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
