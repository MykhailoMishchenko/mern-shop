import React, {useEffect, useState} from "react";
import styles from "./Payment.module.scss";
import {ReactComponent as PaymentImage} from "../../assets/image/storyset/payment.svg";
import Image from "./Image/Image";
import Form from "./Form/Form";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addPaymentInformation} from "../../redux/Order/actions";

const Payment = () => {

  const
    history = useHistory(),
    dispatch = useDispatch();

  const
    [paymentMethod, setPaymentMethod] = useState(""),
    {payment} = useSelector(state => state?.order);

  const
    choosePaymentMethod = (e) => setPaymentMethod(e.target.value),
    savePaymentMethod = () => {
      dispatch(addPaymentInformation(paymentMethod));
      history.push("/create-order");
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
      <h4 className={styles.title}>Укажите Адрес Доставки</h4>
      <div className={styles.container}>
        <Form
          paymentMethod={paymentMethod}
          choosePaymentMethod={choosePaymentMethod}
          savePaymentMethod={savePaymentMethod}
          disabled={disabled}
        />
        <Image Component={PaymentImage} />
      </div>
    </>
  );
};

export default Payment;
