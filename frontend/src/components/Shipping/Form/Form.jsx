import React from "react";
import styles from "./Form.module.scss";
import Button from "./Button/Button";

const Form = ({city, street, department, country, setForm, disabled, saveShippingInformation}) => {
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
          value={street}
          onChange={(e) => setForm("street", e.target.value)}
          type="text"
          placeholder="Введите улицу доставки"
        />
      </label>
      <label>
        Отделение Новой Почты
        <input
          value={department}
          onChange={(e) => setForm("department", e.target.value)}
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
