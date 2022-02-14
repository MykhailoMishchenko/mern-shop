import React from "react";
import styles from "./Title.module.scss";
import {NavLink} from "react-router-dom";

const Title = ({_id, name}) => {
  return (
    <NavLink to={`/product/${_id}`} className={styles.title}>
      <p>{name}</p>
    </NavLink>
  );
};

export default Title;
