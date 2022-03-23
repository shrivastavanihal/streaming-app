import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
//fire base
import { auth } from "../../api/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import Styles from "../authComponent/auth.module.css";
import md5 from "md5";

const Signup = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  //to fetch data on submitting
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      //console.log({username, email, password, confirmPassword});
      if (password !== confirmPassword) {
        toast.error("password not matched!");
      } else {
        let userData = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast.success("successfully user created");
        navigate("/signin");
        console.log(userData);
        let user = userData.user;
        sendEmailVerification(user);
        updateProfile(user, {
          // photoURL:
          //   "https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
          // photoURL: `
          // https://robohash.org/${email}
          // `,
          photoURL: `https://www.gravatar.com/avatar/${md5(email)}q=identicon`,
          displayName: username,
        });
        toast.info(`Verification email has been send to ${email} address`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message.slice(9));
    }
    setLoading(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>Sign up</h1>
        <form className={Styles.formBlock} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className={Styles.formLabel}>
              Username:
            </label>
            <input
              type="text"
              value={username}
              className={Styles.formControl}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              value={email}
              className={Styles.formControl}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              className={Styles.formControl}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className={Styles.formLabel}>
              Confirm Password:
            </label>
            <input
              type="password"
              value={confirmPassword}
              className={Styles.formControl}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <p className={Styles.gotoAuth}>
              Already have an account?
              <Link className={Styles.gotoAuthLink} to="/signin">
                Login
              </Link>
            </p>
          </div>
          <div>
            <button className={Styles.btn}>
              {loading ? "Loading.." : "Sign Up"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Signup;
