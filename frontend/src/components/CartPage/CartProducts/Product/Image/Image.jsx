import React from "react";
import styles from "./Image.module.scss";
import {NavLink} from "react-router-dom";

const Image = ({product}) => {
  return (
    <div className={styles.photo}>
      <NavLink to={`/product/${product._id}`}>
        <img src={product.image}
             alt={product.name}
        />
      </NavLink>
      {product.sale
        ? <div className={styles.discount}>
          -{product.percent}%
          </div>
        : null}
    </div>
  );
};

export default Image;
