import React from "react";
import styles from "./Image.module.scss";

const Image = ({Component}) => {
  return (
    <div className={styles.img}>
      <Component/>
    </div>
  );
};

export default Image;
