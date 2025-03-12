import React, { useContext } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";
import { AppStateContext } from "../context/AppStateContext/AppStateContext";
import Loader from "../components/Loader";

function RootLayout() {
  let { setIsLoading, isLoading } = useContext(AppStateContext);
  return (
    <>
      {isLoading && <Loader />}
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
