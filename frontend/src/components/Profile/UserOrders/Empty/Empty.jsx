import React from "react";
import styles from "./Empty.module.scss";

const Empty = ({Component}) => {
  return (
    <div className={styles.container}>
      <Component/>
    </div>
  );
};

export default Empty;
