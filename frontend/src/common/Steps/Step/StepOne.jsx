import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../Steps.module.scss";


const StepOne = ({step1}) => {
  return (
    <li>
      {
        step1
          ? <NavLink
            activeClassName={styles.active}
            to="/shipping">
            Адрес Доставки</NavLink>
          : <NavLink
            onClick={(e) => e.preventDefault()}
            className={styles.link}
            to="/shipping">
            Адрес Доставки</NavLink>
      }
    </li>
  );
};

export default StepOne;
