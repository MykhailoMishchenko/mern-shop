import React from "react";
import styles from "./Price.module.scss";
import {calcSalePrice, getLastPrice} from "../../../../../utils/calcPrice";

const Price = ({sale, price, percent}) => {
  return (
    <>
      {
        sale ? <strong
            className={styles.withBefore}
            data-price={getLastPrice(price)}>
            ₴ {Math.floor(calcSalePrice(price, percent))}</strong>
          : <strong>₴ {price}</strong>
      }
    </>
  );
};

export default Price;
