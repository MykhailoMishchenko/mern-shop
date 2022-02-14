import React from "react";
import styles from "./Image.module.scss";
import {NavLink} from "react-router-dom";

const Image = ({product, image, name, percent, sale}) => {
  return (
    <div className={styles.photo}>
      <NavLink to={`/product/${product}`}>
        <img src={image}
             alt={name}
        />
      </NavLink>
      {
        sale
          ? <div className={styles.discount}>-{percent}%</div>
          : null
      }
    </div>
  );
};

export default Image;
