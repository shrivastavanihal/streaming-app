import React, { useContext } from "react";
import { AuthContext } from "../../api/AuthContext";
import { FaCamera } from "react-icons/fa";
import Styles from "./myprofile.module.css";
const MyAccount = () => {
  let USER = useContext(AuthContext);
  let { photoURL, displayName, email } = USER;

  return (
    <section>
      <article className={Styles}>
        <div className={Styles.photoURL}>
          <aside className={Styles.asideIcon}>
            <figure>
              <img src={photoURL} alt={displayName} />
            </figure>
            <main>
              <span className={Styles.cameraIcon}>
                <FaCamera />
              </span>
            </main>
          </aside>

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
