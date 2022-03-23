import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../api/AuthContext";
import Styles from "../navbar/navbar.module.css";

const Menu = () => {
  let USER = useContext(AuthContext);

  let AuthenticatedUser = () => {
    return (
      <>
        <li>
          <NavLink to={{ pathname: "/signin" }} className={Styles.navbarAnchor}>
            <span>
              <img
                src={USER.photoURL}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                alt=""
              />
            </span>
            <span>{USER.displayName}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarAnchor}>
            Signout
          </NavLink>
        </li>
      </>
    );
  };
  let GuestUser = () => {
    return (
      <>
        <li>
          <NavLink
            to={{ pathname: "/signin" }}
            activeclassname="active"
            className={Styles.navbarAnchor}
          >
            SignIn
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: "/signup" }}
            activeclassname="active"
            className={Styles.navbarAnchor}
          >
            SignUp
          </NavLink>
        </li>
      </>
    );
  };
  return (
    <ul className={Styles.navbarUl}>
      <li>
        <NavLink
          to={{ pathname: "/" }}
          activeclassname="active"
          className={Styles.navbarAnchor}
        >
          Home
        </NavLink>
      </li>
      {USER ? <AuthenticatedUser /> : <GuestUser />}
    </ul>
  );
};

export default Menu;
