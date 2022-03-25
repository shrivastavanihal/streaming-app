import React from "react";
import MainProfile from "./MainProfile";
import Styles from "./myprofile.module.css";
import SidebarMenu from "./SidebarMenu";
const MyProfile = () => {
  return (
    <section id="">
      <article className={Styles.profileBlock}>
        <div className={Styles.sidebarMenu}>
          <SidebarMenu />
        </div>
        <div className={Styles.mainProfile}>
          <MainProfile />
        </div>
        {/* <div>idkls</div> */}
      </article>
    </section>
  );
};

export default MyProfile;
