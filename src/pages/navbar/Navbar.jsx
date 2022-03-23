import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import Styles from "./navbar.module.css";
const Navbar = () => {
  let location = useLocation();
  return (
    <section
      id={Styles.navbarBlock}
      //apply css based on path
      className={location.pathname === "/" ? Styles.homeClass : ""}
    >
      <article className={Styles.navBarArticle}>
        <Logo />
        <Menu />
      </article>
    </section>
  );
};

export default Navbar;
