import React, { useState } from "react";
import { toast } from "react-toastify";
//fire base
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../api/firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import Styles from "../authComponent/auth.module.css";

const PhoneAuth = () => {
  let navigate = useNavigate();
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      let recaptchaVerifier = new RecaptchaVerifier(
        "captcha-container",
        {
          size: "invisible",
          callback: response => {
            //reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        },
        auth
      );
      let sendOTP = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
      let confirmationMessage = window.prompt("Enter OTP");
      await sendOTP.confirm(confirmationMessage);
      toast.success("Successfully logged in..");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.info);
    }
    setLoading(false);
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h1 style={{ padding: "20px 0" }}>Signin using phone number</h1>
        <form className={Styles.formBlock} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone" className={Styles.formLabel}>
              Phone number:
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              className={Styles.formControl}
              onChange={e => setPhone(e.target.value)}
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
          <div id="captcha-container"></div>
          <div>
            <button className={Styles.btn}>
              {loading ? "Loading.." : "Send OTP"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default PhoneAuth;
