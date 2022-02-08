import React from "react";
import styles from "./Button.module.scss";
import {getLastPrice} from "../../../../../utils/getLastPrice";
import {calcSalePrice} from "../../../../../utils/calcSalePrice";

const Button = ({product, addToCartHandler, qty, setQty}) => {
  return (
    <div className={styles.buyProduct}>
      {
        product.sale ? <strong
            className={styles.withBefore}
            data-price={getLastPrice(product.price)}>
            ₴ {Math.floor(calcSalePrice(product.price, product.percent))}</strong>
          : <strong>₴ {product.price}</strong>
      }
      <button
        onClick={addToCartHandler}
        disabled={!(!!product.countInStock)}
        className={!!product.countInStock ? null : styles.isDisabled}>
        Добавить в Корзину
      </button>
      <div className={product.countInStock ? styles.Qty : styles.QtyDisabled}>
        <p>кол-во</p>
        {
          product.countInStock > 0 ? (
            <select
              value={qty}
              onChange={e => setQty(e.target.value)}
            >
              {
                [...Array(product.countInStock).keys()].map(x => (
                  <option
                    key={x + 1}
                    value={x + 1}
                  >{x + 1}</option>
                ))
              }
            </select>
          ) : <p>0</p>
        }
      </div>
    </div>
  );
};

export default Button;
