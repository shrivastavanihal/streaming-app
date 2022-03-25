import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, storage } from "../../api/firebase";
import {
  getDownloadURL,
  ref as photoRef,
  //   getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import Styles from "../authComponent/auth.module.css";
import { AuthContext } from "../../api/AuthContext";

const UploadProfilePhoto = () => {
  let USER = useContext(AuthContext);
  //   let storage = getStorage();
  let [loading, setLoading] = useState(false);
  let [photo, setPhoto] = useState("");
  let [progress, setProgress] = useState(0);
  let [barStatus, setBarStatus] = useState(false);

  let handleSubmit = e => {
    e.preventDefault();
    try {
      setLoading(true);
      let storageRef = photoRef(storage, `/profile-photo/${photo.name}`);
      let uploadTask = uploadBytesResumable(storageRef, photo);
      //   console.log(uploadTask);
      uploadTask.on(
        "state_change",
        snapShot => {
          //progress bar
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setProgress(progressBar);
          setBarStatus(true);
          setLoading(true);
        },
        err => {
          //error handling
        },
        async () => {
          //completion task
          let downLoadUrl = await getDownloadURL(storageRef);
          console.log(downLoadUrl);
          updateProfile(
            USER,
            {
              photoURL: downLoadUrl,
            },
            toast.success("Successfully profile photo updated")
          );
          setBarStatus(false);
          setLoading(false);

          window.location.assign("/myprofile");
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  let ProgressUI = () => {
    return (
      <div className="progress">
        <div className="bar" style={{ width: `${progress}%` }}>
          <p className="percent">{Math.round(progress)}%</p>
        </div>
      </div>
    );
  };
  return (
    <section id={Styles.authSection}>
      <header>
        {/* <span>
          <ProgressUI />
        </span>
        <span>{progress}</span> */}
        <span>{barStatus ? <ProgressUI /> : ""}</span>
        <span>{barStatus ? Math.round(progress) : ""}</span>
      </header>
      <article className={Styles.authArticle}>
        <h2 style={{ padding: "20px 0" }}>Upload Photo</h2>
        <div className={Styles.formBlock}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="photo" className={Styles.formLabel}>
                Upload Photo
              </label>
              <input
                type="file"
                id="photo"
                className={Styles.formControl}
                onChange={e => setPhoto(e.target.files[0])}
              />
            </div>

            <div>
              <p className={Styles.gotoAuth}>
                <Link className={Styles.gotoAuthLink} to="/myprofile">
                  Go back
                </Link>
              </p>
            </div>
            <div>
              <button className={Styles.btn}>
                {loading ? "Loading.." : "Upload"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default UploadProfilePhoto;
