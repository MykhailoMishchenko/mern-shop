import React from "react";
import styles from "./CartOrder.module.scss";
import {calcFinalPrice} from "../../../utils/calcFinalPrice";

const CartOrder = ({products, count, goToPay}) => {
  return (
    <div className={styles.order}>
      <div className={styles.orderTitle}>
        {
          products.length === 0
            ? <h3>Ваша корзина пустая</h3>
            : <>
              <h3>Всего {count} {count <= 1 ? "товар" : count <= 4 ? "товара" : "товаров"}</h3>
              <p>на сумму ₴ {Math.floor(calcFinalPrice(products))}</p>
            </>
        }
      </div>
      <div className={styles.goNext}>
        <button
          onClick={goToPay}
          disabled={products.length === 0}
          className={products.length === 0 ? styles.btnDisabled : null}>Перейти к Оплате
        </button>
      </div>
    </div>
  );
};

export default CartOrder;
