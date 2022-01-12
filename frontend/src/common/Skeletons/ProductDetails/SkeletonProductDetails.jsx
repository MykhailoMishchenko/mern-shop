import React from "react";
import styles from "./SkeletonProductDetails.module.scss";

const SkeletonProductDetails = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.skeleton}>
          <div className={styles.dark}></div>
        </div>
        <div className={styles.skeleton2}>
          <div className={styles.light}></div>
          <div className={styles.light}></div>
          <div className={styles.light}></div>
          <div className={styles.light}></div>
        </div>
      </div>
    </div>
  )
  ;
};

export default SkeletonProductDetails;
