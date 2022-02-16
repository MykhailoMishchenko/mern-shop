import React from "react";
import styles from "./SkeletonCarousel.module.scss";

const SkeletonCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>

      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
      </div>
    </div>
  );
};

export default SkeletonCarousel;
