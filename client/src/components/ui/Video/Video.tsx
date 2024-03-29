import React from "react";
import styles from "./Video.module.scss";

type VideoType = {
  videoSrc: string;
  heading: string;
};

const Video = ({ videoSrc, heading }: VideoType) => {
  return (
    <div className={styles.wrapperVideo}>
      <video autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h2 className={styles.heading}>{heading}</h2>
      </div>
    </div>
  );
};

export default Video;
