import React from "react";
import styles from "./Form.module.scss";

const Form = ({loading, name, email, password, confirmPassword, setForm}) => {
  return (
    <div className={styles.container}>
      <h4>Профиль Пользователя</h4>
      <label>
        Имя
        <input
          value={loading ? "Загрузка" : name}
          onChange={(e) => setForm("name", e.target.value)}
          type="text"
          placeholder="Введите имя" />
      </label>
      <label>
        Логин
        <input
          value={loading ? "Загрузка" : email}
          onChange={(e) => setForm("email", e.target.value)}
          type="text"
          placeholder="Введите логин" />
      </label>
      <label>
        Пароль
        <input
          value={password}
          onChange={(e) => setForm("password", e.target.value)}
          type="password"
          placeholder="Введите пароль" />
      </label>
      <label>
        Подтвердите пароль
        <input
          value={confirmPassword}
          onChange={(e) => setForm("confirmPassword", e.target.value)}
          type="password"
          placeholder="Введите пароль" />
      </label>
    </div>
  );
};

export default Form;
