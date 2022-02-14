import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../Steps.module.scss";

const StepTwo = ({step2}) => {
  return (
    <li>
      {
        step2
          ? <NavLink
            activeClassName={styles.active}
            to="/payment">
            Метод Оплаты</NavLink>
          : <NavLink
            onClick={(e) => e.preventDefault()}
            className={styles.link}
            to="/payment">
            Метод Оплаты</NavLink>
      }
    </li>
  );
};

export default StepTwo;
