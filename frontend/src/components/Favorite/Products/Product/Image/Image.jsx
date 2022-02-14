import React from "react";
import styles from "./Image.module.scss";
import {NavLink} from "react-router-dom";
import Sale from "./Sale/Sale";

const Image = ({_id, image, name, sale, percent}) => {
  return (
    <div className={styles.photo}>
      <NavLink to={`/product/${_id}`}>
        <img src={image} alt={name} />
      </NavLink>
      <Sale sale={sale} percent={percent}/>
    </div>
  );
};

export default Image;
