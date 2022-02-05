import React from "react";
import styles from "./shippingForm.module.scss";
import {ReactComponent as Shipping} from "../../../assets/image/storyset/shipping.svg";
import {useHistory} from "react-router-dom";

const ShippingForm = () => {

  const history = useHistory();

  return (
    <>
      <h4>Укажите Адрес Доставки</h4>
      <div className={styles.container}>
        <div className={styles.img}>
          <Shipping />
        </div>
        <div className={styles.form}>
          <label>
            Улица
            <input type="text" placeholder="Введите улицу для доставки" />
          </label>
          <label>
            Город
            <input type="text" placeholder="Введите улицу для доставки" />
          </label>
          <label>
            Отделение Новой Почты
            <input type="text" placeholder="Введите улицу для доставки" />
          </label>
          <label>
            Страна
            <input type="text" placeholder="Введите улицу для доставки" />
          </label>
          <button onClick={() => history.push("/payment")}>Дальше</button>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;
