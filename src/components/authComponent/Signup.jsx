import React, { useState } from "react";
import { toast } from "react-toastify";
//fire base
import { auth } from "../../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Styles from "../authComponent/auth.module.css";

const Signup = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [loading, setLoading] = useState(false);

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
        console.log(userData);
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
              name=""
              id="username"
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
              name=""
              id=""
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
              name=""
              id=""
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
              name=""
              id=""
              className={Styles.formControl}
              onChange={e => setConfirmPassword(e.target.value)}
            />
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
