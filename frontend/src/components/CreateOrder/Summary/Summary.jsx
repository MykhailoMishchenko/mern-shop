import React from "react";
import styles from "./Summary.module.scss";

const Summary = ({cartItems}) => {

  //calculate price
  const count = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const itemsPrice = cartItems.reduce((acc,item) => acc + item.price * item.qty, 0);
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)))
  const totalPrice = (Number(itemsPrice) + Number(taxPrice)).toFixed(2)

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summary}>
        <div className={styles.summaryTitle}>
          <div className={styles.title}>
            <h3>Всего ({count}) {count <= 1 ? "товар" : count <= 4 ? "товара" : "товаров"}</h3>
            <p>на сумму ₴ {itemsPrice} </p>
          </div>
          <div className={styles.descriptions}>
            <div><p>Товара на суму</p> <p>₴ {itemsPrice}</p></div>
            <div><p>ПДВ</p> <p>₴ {taxPrice}</p></div>
            <div><p>Доставка</p> <p>Уточнять</p></div>
            <div><p>Всего</p> <p>₴ {totalPrice}</p></div>
          </div>
        </div>
        <div className={styles.summaryButton}>
          <button>
            Разместить Заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
