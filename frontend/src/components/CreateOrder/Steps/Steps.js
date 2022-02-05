import React from "react";
import styles from "./steps.module.scss";
import {NavLink} from "react-router-dom";


const Steps = ({step1, step2, step3}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.progressbar}>
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
      </ul>
    </div>
  );
};

export default Steps;