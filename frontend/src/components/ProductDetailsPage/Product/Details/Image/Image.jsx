import React from "react";
import styles from "./Image.module.scss";

const Image = ({product}) => {
  return (
    <div className={product.countInStock ? styles.photo : styles.photoWithFilter}>
      {product.sale ? <div className={styles.discount}>-{product.percent}%</div> : null}
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default Image;
