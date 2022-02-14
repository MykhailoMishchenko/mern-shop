import React from "react";
import styles from "./Form.module.scss";
import Button from "./Button/Button";

const Form = ({city, address, postalOffice, country, setForm, disabled, saveShippingInformation}) => {
  return (
    <div className={styles.form}>
      <label>
        Город
        <input
          value={city}
          onChange={(e) => setForm("city", e.target.value)}
          type="text"
          placeholder="Введите город доставки"
        />
      </label>
      <label>
        Улица
        <input
          value={address}
          onChange={(e) => setForm("address", e.target.value)}
          type="text"
          placeholder="Введите улицу доставки"
        />
      </label>
      <label>
        Отделение Новой Почты
        <input
          value={postalOffice}
          onChange={(e) => setForm("postalOffice", e.target.value)}
          type="text"
          placeholder="Введите отделение Новой Почты"
        />
      </label>
      <label>
        Страна
        <input
          value={country}
          onChange={(e) => setForm("country", e.target.value)}
          type="text"
          placeholder="Введите страну доставки"
        />
      </label>
      <Button disabled={disabled} saveShippingInformation={saveShippingInformation}/>
    </div>
  );
};

export default Form;
