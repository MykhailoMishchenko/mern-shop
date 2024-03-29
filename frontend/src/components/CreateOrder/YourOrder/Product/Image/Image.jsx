import React from "react";
import styles from "./Image.module.scss";
import {NavLink} from "react-router-dom";

const Image = ({_id, image, name, sale, percent}) => {
  return (
    <div className={styles.photo}>
        <img src={image} alt={name} />
      {
        sale &&
        <div className={styles.discount}>
          {percent}%
        </div>
      }
    </div>
  );
};

export default Image;
