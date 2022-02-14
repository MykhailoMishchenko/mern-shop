import React from "react";
import styles from "./Price.module.scss";
import {calcSalePrice, getLastPrice} from "../../../../../utils/calcPrice";

const Price = ({sale, price, percent, isGrid}) => {
  return (
    <>
      {
        sale
          ? <p
            data-price={getLastPrice(price)}
            className={isGrid ? styles.newPrice : styles.newPriceList}>
            ₴ {Math.floor(calcSalePrice(price, percent))}</p>
          : <p className={isGrid ? styles.priceOfProduct : styles.priceOfProductList}>₴ {Math.floor(price)}</p>
      }
    </>
  );
};

export default Price;
