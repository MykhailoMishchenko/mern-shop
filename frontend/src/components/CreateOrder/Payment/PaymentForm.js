import React from "react";
import styles from "./payment.module.scss";
import {ReactComponent as Payment} from "../../../assets/image/storyset/payment.svg";
import apple from "../../../assets/image/apple-pay.png";
import google from "../../../assets/image/google-pay.png";
import novaPoshta from "../../../assets/image/nova-poshta.png";
import {useHistory} from "react-router-dom";

const PaymentForm = () => {

  const history = useHistory();

  return (
    <>
      <h4>Укажите Метод Оплаты</h4>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.radio}>
            <label htmlFor="ApplePay">
              <input name="payment" value="ApplePay" id="ApplePay" type="radio"/>
              <img src={apple} alt="ApplePay" />
            </label>
            <label htmlFor="GooglePay">
              <input name="payment" value="GooglePay" id="GooglePay" type="radio"/>
              <img src={google} alt="GooglePay" />
            </label>
            <label htmlFor="Nova-Poshta">
              <input name="payment" value="Nova-Poshta" id="Nova-Poshta" type="radio"/>
              <img src={novaPoshta} alt="Nova-Poshta" />
            </label>
          </div>
          <div className={styles.info}>

          </div>
          <button onClick={() => history.push("/create-order")}>Дальше</button>
        </div>
        <div className={styles.img}>
          <Payment />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
