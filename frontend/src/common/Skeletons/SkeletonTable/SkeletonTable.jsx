import React from "react";
import styles from "./SkeletonTable.module.scss";

const SkeletonTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      <div className={styles.orders}></div>
      <div className={styles.orders}></div>
    </div>
  );
};

export default SkeletonTable;
