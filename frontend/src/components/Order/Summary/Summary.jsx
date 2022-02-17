import React from "react";
import styles from "./Summary.module.scss";


const Summary = ({taxPrice, totalPrice, payment, cartItems, itemsPrice}) => {

  const count = cartItems.length

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summary}>
        <div className={styles.summaryTitle}>
          <div className={styles.title}>
            <h3>Всего ({count}) {count <= 1 ? "товар" : count <= 4 ? "товара" : "товаров"}</h3>
            <p>на сумму ₴ {totalPrice} </p>
          </div>
          <div className={styles.descriptions}>
            {itemsPrice && <div><p>Товара на суму</p> <p>₴ {itemsPrice}</p></div>}
            <div><p>ПДВ</p> <p>₴ {taxPrice}</p></div>
            <div><p>Доставка</p> <p>Уточнять</p></div>
            <div><p>Всего</p> <p>₴ {totalPrice}</p></div>
          </div>
        </div>
        <div className={styles.summaryButton}>
          {payment === "ApplePay" && <button>Apple Pay</button>}
          {payment === "GooglePay" && <button>Google Pay</button>}
          {payment === "Nova-Poshta" && <button>Оплата Наложенным Платежом</button>}
        </div>
      </div>
    </div>
  );
};

export default Summary;
