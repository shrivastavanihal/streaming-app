import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  Fragment,
} from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../api/AuthContext";
import Styles from "../navbar/navbar.module.css";

const Menu = () => {
  let [toggle, setToggle] = useState(false);
  let USER = useContext(AuthContext);
  let toggleRef = useRef();
  let myRef = useRef();

  let handleClickOutside = e => {
    if (!myRef.current.contains(e.target) && toggle) {
      console.log(e.target);
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  let dropDownMenu = () => {
    setToggle(!toggle);
  };

  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li onClick={dropDownMenu}>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarIconLink}>
            <span>
              <img
                src={USER.photoURL}
                alt={USER.displayName}
                className={Styles.navbarIcon}
              />
            </span>
            <span>Profile</span>
          </NavLink>
          <div
            className={toggle ? "dropDown show" : "dropDown hide"}
            ref={toggleRef}
          >
            <ul>
              <li>
                <NavLink to="/myprofile">
                  <span>
                    <FaUser />
                  </span>
                  My profile
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarAnchor}>
            Signout
          </NavLink>
        </li>
      </Fragment>
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
    <div ref={myRef} onClick={handleClickOutside} className={Styles.menu}>
      <ul>
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
    </div>
  );
};

export default Menu;
