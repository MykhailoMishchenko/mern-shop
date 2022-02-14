import React from "react";
import styles from "./Image.module.scss";

const Image = ({countInStock, sale, image, name, percent}) => {
  return (
    <div className={countInStock ? styles.photo : styles.photoWithFilter}>
      {
        sale
          ? <div className={styles.discount}>-{percent}%</div>
          : null
      }
      <img src={image} alt={name} />
    </div>
  );
};

export default Image;
