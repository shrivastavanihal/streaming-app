import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/authComponent/Login";
import Signup from "../components/authComponent/Signup";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

const StreamBasedRoutes = () => {
  let StreamRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "signin",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return StreamRoutes;
};

export default StreamBasedRoutes;
