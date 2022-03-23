import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "../navbar/navbar.module.css";

const Menu = () => {
  return (
    <ul className={Styles.navbarUl}>
      <li>
        <NavLink
          to={{ pathname: "/" }}
          activeClassname="active"
          className={Styles.navbarAnchor}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{ pathname: "/signin" }}
          activeClassname="active"
          className={Styles.navbarAnchor}
        >
          SignIn
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{ pathname: "/signup" }}
          activeClassname="active"
          className={Styles.navbarAnchor}
        >
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
