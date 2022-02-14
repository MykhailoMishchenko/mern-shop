import React from "react";
import styles from "./SkeletonProducts.module.scss";

const SkeletonListOfProducts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
      </div>
      <div className={styles.skeleton}>
        <div className={styles.dark}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
      </div>
    </div>
  );
};

export default SkeletonListOfProducts;
