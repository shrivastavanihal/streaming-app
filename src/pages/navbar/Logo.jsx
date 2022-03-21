import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import Styles from "./navbar.module.css";
const Logo = () => {
  return (
    <div className="logoBlokc">
      <a className={Styles.logoBlockAnchor} href="#">
        {" "}
        <span>
          <FaPhotoVideo className={Styles.logoBlockSpanIcon} />
        </span>
        <span>Stream Base</span>
      </a>
    </div>
  );
};

export default Logo;
