import React, { useEffect, useRef, useState } from "react";
import VIDEO from "./videoComponent/ErenYeager.mp4";
import Styles from "./videoComponent/video.module.css";
import { FaPlay, FaPause } from "react-icons/fa";

const PreLoadedVideo = () => {
  let videoRef = useRef(false);
  let [play, setPlay] = useState(true);

  //   useEffect(() => {
  //     videoRef.current.play();
  //   }, []);

  let VideoControls = () => {
    setPlay(!play);
    if (play) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    } else {
      videoRef.current.play();
      videoRef.current.muted = false;
    }
  };
  return (
    <section id={Styles.videoBlock}>
      <div className={Styles.videoDesc}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nulla modi quibusdam ex. Nisi, repudiandae reiciendis? Quo molestiae
          omnis sapiente perferendis aspernatur unde, explicabo id, quasi
          suscipit ratione quaerat ad.
        </p>
        <p>
          <main onClick={VideoControls}>
            {play ? (
              <aside className={Styles.videoAside}>
                <FaPlay className={Styles.videoPlay} />
                <span>Pause</span>
              </aside>
            ) : (
              <aside className={Styles.videoAside}>
                <FaPause className={Styles.videoPlay} />
                <span>Play</span>
              </aside>
            )}
          </main>
        </p>
      </div>
      <video
        // controls
        src={VIDEO}
        className={Styles.videoBlockPlayer}
        autoPlay
        muted
        loop
        ref={videoRef}
        // preload="auto"
      ></video>
    </section>
  );
};

export default PreLoadedVideo;
