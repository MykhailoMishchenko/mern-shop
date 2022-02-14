import React from "react";
import styles from "./Form.module.scss";
import apple from "../../../assets/image/apple-pay.png";
import google from "../../../assets/image/google-pay.png";
import novaPoshta from "../../../assets/image/nova-poshta.png";

const Form = ({paymentMethod,choosePaymentMethod, savePaymentMethod, disabled}) => {
  return (
    <div className={styles.form}>
      <div className={styles.radio}>
        <label htmlFor="ApplePay">
          <input
            onChange={choosePaymentMethod}
            name="payment"
            value="ApplePay"
            id="ApplePay"
            type="radio"
            checked={paymentMethod === "ApplePay"}
          />
          <img src={apple} alt="ApplePay" />
        </label>
        <label htmlFor="GooglePay">
          <input
            onChange={choosePaymentMethod}
            name="payment"
            value="GooglePay"
            id="GooglePay"
            type="radio"
            checked={paymentMethod === "GooglePay"}
          />
          <img src={google} alt="GooglePay" />
        </label>
        <label htmlFor="Nova-Poshta">
          <input
            onChange={choosePaymentMethod}
            name="payment"
            value="Nova-Poshta"
            id="Nova-Poshta"
            type="radio"
            defaultChecked={paymentMethod === "Nova-Poshta"}
          />
          <img src={novaPoshta} alt="Nova-Poshta" />
        </label>
      </div>
      <div className={styles.info}>
        <ul>
          <h5>На нашем сайте есть 3 вида оплаты</h5>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Наложенный платеж (Новая Почта)</li>
        </ul>
      </div>
      <button
        onClick={savePaymentMethod}
        className={disabled ? styles.dsbl : ""}
        disabled={disabled}
      >Дальше
      </button>
    </div>
  );
};

export default Form;
