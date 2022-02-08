import React, {useEffect, useState} from "react";
import styles from "./payment.module.scss";
import {ReactComponent as Payment} from "../../../assets/image/storyset/payment.svg";
import apple from "../../../assets/image/apple-pay.png";
import google from "../../../assets/image/google-pay.png";
import novaPoshta from "../../../assets/image/nova-poshta.png";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addPaymentInformation} from "../../../redux/Order/actions";

const PaymentForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("");
  const {
    payment
  } = useSelector(state => state?.order);

  const
    choosePaymentMethod = (e) => setPaymentMethod(e.target.value),
    savePaymentMethod = () => {
      dispatch(addPaymentInformation(paymentMethod));
      history.push("/create-order")
    };


  useEffect(() => {
    if (payment) {
      console.log(payment);
      setPaymentMethod(payment);
    }
  }, []);

  const disabled = !paymentMethod;

  return (
    <>
      <h4>Укажите Метод Оплаты</h4>
      <div className={styles.container}>
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
              <li>Наложеный платеж (Новая Почта)</li>
            </ul>
          </div>
          <button
            onClick={savePaymentMethod}
            className={disabled ? styles.dsbl : ""}
            disabled={disabled}
            >Дальше
          </button>
        </div>
        <div className={styles.img}>
          <Payment />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
