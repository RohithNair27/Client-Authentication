import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "../pages/Auth/SignupPage";
import Header from "../components/Header";
import AdminPageOne from "../pages/AdminPages/AdminPageOne";
import AdminPageTwo from "../pages/AdminPages/AdminPageTwo";
import UserPagesOne from "../pages/UserPages/UserPagesOne";
import UserPagesTwo from "../pages/UserPages/UserPagesTwo";
import PageNotFound from "../pages/PageNotFound";

import AdminRoute from "./AdminRoute";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<AdminRoute />}>
          <Route element={<AdminPageOne />} path="/admin/pageone" />
          <Route element={<AdminPageTwo />} path="/admin/pagetwo" />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
