import React from "react";
import styles from "../../CreateOrder/Summary/Summary.module.scss";


const Summary = ({cartItems, totalPrice, taxPrice, paymentMethod}) => {

  const count = cartItems.length;

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summary}>
        <div className={styles.summaryTitle}>
          <div className={styles.title}>
            <h3>Всего ({count}) {count <= 1 ? "товар" : count <= 4 ? "товара" : "товаров"}</h3>
            <p>на сумму ₴ {totalPrice} </p>
          </div>
          <div className={styles.descriptions}>
            <div><p>Товара на суму</p> <p>₴ {totalPrice}</p></div>
            <div><p>ПДВ</p> <p>₴ {taxPrice}</p></div>
            <div><p>Доставка</p> <p>Уточнять</p></div>
            <div><p>Всего</p> <p>₴ {totalPrice}</p></div>
          </div>
        </div>
        <div className={styles.summaryButton}>
          {
            paymentMethod === "ApplePay" && <button className={styles.pay}>
              <i className="fab fa-apple"></i> Pay
            </button>
          }
          {
            paymentMethod === "GooglePay" && <button className={styles.pay}>
              <i className="fab fa-google"></i> Pay
            </button>
          }
          {paymentMethod === "Nova-Poshta" && <button className={styles.novaPay}>Оплата наложенным платежом</button>}
        </div>
      </div>
    </div>
  );
};

export default Summary;
