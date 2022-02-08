import React from "react";
import styles from "./EmptyProducts.module.scss";
import {ReactComponent as Empty} from "../../../assets/image/storyset/emptyProducts.svg";

const EmptyListOfProduct = () => {
  return (
    <div className="container">
      <div className={styles.main}>
        <Empty/>
        <p>Мы работаем над добавлением <span>нового товара</span> !</p>
      </div>
    </div>
  );
};

export default EmptyListOfProduct;
