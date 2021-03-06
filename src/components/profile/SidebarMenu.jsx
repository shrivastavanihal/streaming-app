import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle, MdUploadFile } from "react-icons/md";
import Styles from "./myprofile.module.css";
const SidebarMenu = () => {
  return (
    <div className={Styles.sidebarMenu}>
      <ul>
        <li>
          <Link to="/myprofile/my-account">
            <span>
              <MdOutlineAccountCircle />
            </span>
            <span>My account</span>
          </Link>
        </li>
        <li>
          <Link to="/myprofile/upload-photo">
            <span>
              <MdUploadFile />
            </span>
            <span>Upload photo</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
