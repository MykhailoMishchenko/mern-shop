import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../Steps.module.scss";

const StepThree = ({step3}) => {
  return (
    <li>
      {
        step3
          ? <NavLink
            activeClassName={styles.active}
            to="/create-order">
            Разместить заказ</NavLink>
          : <NavLink
            onClick={(e) => e.preventDefault()}
            className={styles.link}
            to="/create-order">
            Разместить заказ</NavLink>
      }
    </li>
  );
};

export default StepThree;
