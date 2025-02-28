import { createBrowserRouter, RouterProvider } from "react-router";

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
import ProtectedRoutes from "./ProtectedRoutes";

function Router() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        //Common Routes
        { index: true, element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },

        {
          path: "commonpageone",
          element: <ProtectedRoutes AuthorizedRoles={["ADMIN", "USER"]} />,
          children: [
            { index: true, element: <CommonPageOne /> },
            { path: "commonpagetwo", element: <CommonPageTwo /> },
          ],
        },
        //Admin protected routes
        {
          path: "adminpageone",
          element: <ProtectedRoutes AuthorizedRoles={["ADMIN"]} />,
          children: [
            { index: true, element: <AdminPageOne /> },
            { path: "adminpagetwo", element: <AdminPageTwo /> },
          ],
        },
        //User Protected routes
        {
          path: "userpageone",
          element: <ProtectedRoutes AuthorizedRoles={["USER"]} />,
          children: [
            { index: true, element: <UserPagesOne /> },
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
