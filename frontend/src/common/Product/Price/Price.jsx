import React from "react";
import styles from "./Price.module.scss";
import {calcSalePrice, getLastPrice} from "../../../utils/calcPrice";

const Price = ({sale, price, percent}) => {
  return (
    <>
      {
        sale
          ? <p
            data-price={getLastPrice(price)}
            className={styles.newPrice}>
            ₴ {Math.floor(calcSalePrice(price, percent))}</p>
          : <p className={styles.priceOfProduct}>₴ {Math.floor(price)}</p>
      }
    </>
  );
};

export default Price;
