import React, { useState } from "react";
import { toast } from "react-toastify";
//fire base
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Styles from "../authComponent/auth.module.css";

const Login = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [toggle, setToggle] = useState(false);

  let ChangeIcon = () => {
    setToggle(!toggle);
  };
  //to fetch data on submitting
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      //console.log({username, email, password, confirmPassword});

      let userData = await signInWithEmailAndPassword(auth, email, password);
      if (userData.user.emailVerified === true) {
        toast.success("successfully logged in");
        navigate("/");
        window.location.reload()
      } else {
        navigate("/signin");
        toast.error("Invalid username and password");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message.slice(9));
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>Login</h1>
        <form className={Styles.formBlock} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className={Styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className={Styles.formControl}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className={Styles.formLabel}>
              Password:
            </label>
            <input
              type={toggle !== true ? "password" : "text"}
              value={password}
              id="password"
              className={Styles.formControl}
              onChange={e => setPassword(e.target.value)}
            />
            <span className={Styles.eyeIcon} onClick={ChangeIcon}>
              {toggle !== true ? (
                <FaEyeSlash className={Styles.eyeIconSVG} />
              ) : (
                <FaEye className={Styles.eyeIconSVG} />
              )}
            </span>
          </div>

          <div>
            <p className={Styles.gotoAuth}>
              New to Streambase?
              <Link className={Styles.gotoAuthLink} to="/signup">
                Sign up
              </Link>
            </p>
          </div>
          <div>
            <button className={Styles.btn}>
              {loading ? "Loading.." : "Login"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
