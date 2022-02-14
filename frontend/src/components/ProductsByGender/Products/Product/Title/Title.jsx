import React from "react";
import styles from "./Title.module.scss";
import {NavLink} from "react-router-dom";

const Title = ({_id, name, isGrid}) => {
  return (
    <NavLink
      to={`/product/${_id}`}
      className={isGrid ? styles.title : styles.titleGrid}>
      <p className={isGrid ? styles.nameOfProduct : styles.nameOfProductList}>{name}</p>
    </NavLink>
  );
};

export default Title;
