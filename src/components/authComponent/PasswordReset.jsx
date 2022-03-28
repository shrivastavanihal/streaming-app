import React, { useState } from "react";
import { toast } from "react-toastify";
//fire base
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../api/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Styles from "../authComponent/auth.module.css";

const PasswordReset = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
    setLoading(false);
    await sendPasswordResetEmail(auth, email);
    toast.info(`Password reset email has been sent to ${email}`);
    navigate("/login");
    try {
      setLoading(true);
    } catch (error) {
      console.log(error);
      toast.error(error.info);
    }
    setLoading(false);
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>Reset password</h1>
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

          <div>
            <p className={Styles.gotoAuth}>
              go back to Stream base?
              <Link className={Styles.gotoAuthLink} to="/signin">
                Login
              </Link>
            </p>
          </div>
          <div>
            <button className={Styles.btn}>
              {loading ? "Loading.." : "Reset Password"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default PasswordReset;
