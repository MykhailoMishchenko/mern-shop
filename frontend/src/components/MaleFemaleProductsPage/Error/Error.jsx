import React from "react";
import styles from "./Error.module.scss";
import {ReactComponent as ErrorImg} from "../../../assets/image/storyset/ErrorMaleFemaleListOfProducts.svg";

const Error = () => {
  return (
    <div className={styles.wrapper}>
      <ErrorImg />
      <p>Ошибка! Извините за неудобства, <span>мы уже решаем эту проблему</span> !</p>
    </div>
  );
};

export default Error;
