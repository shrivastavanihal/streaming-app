import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/authComponent/Login";
import PasswordReset from "../components/authComponent/PasswordReset";
import PhoneAuth from "../components/authComponent/PhoneAuth";
import Signup from "../components/authComponent/Signup";
import MyAccount from "../components/profile/MyAccount";
import MyProfile from "../components/profile/MyProfile";
import UploadProfilePhoto from "../components/profile/UploadProfilePhoto";
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
      path: "password-reset",
      element: <PasswordReset />,
    },
    {
      path: "phone-auth",
      element: <PhoneAuth />,
    },
    {
      path: "myprofile",
      element: <MyProfile />,
      children: [
        {
          path: "upload-photo",
          element: <UploadProfilePhoto />,
        },
        {
          path: "my-account",
          element: <MyAccount />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return StreamRoutes;
};

export default StreamBasedRoutes;
