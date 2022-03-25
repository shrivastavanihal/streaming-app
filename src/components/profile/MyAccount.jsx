import React, { useContext } from "react";
import { AuthContext } from "../../api/AuthContext";
import Styles from "./myprofile.module.css";
const MyAccount = () => {
  let USER = useContext(AuthContext);
  let { photoURL, displayName, email } = USER;

  return (
    <section>
      <article className={Styles}>
        <div className={Styles.photoURL}>
          <figure className={Styles}>
            <img src={photoURL} alt={displayName} />
          </figure>
          <footer>
            <h2>{displayName}</h2>
          </footer>
        </div>
        <div>
          <aside className={Styles.userInfo}>
            <p>Email:{email}</p>
          </aside>
        </div>
      </article>
    </section>
  );
};

export default MyAccount;
