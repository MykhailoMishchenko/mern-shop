import React from "react";
import styles from "../Form.module.scss";

const Registration = ({
  newCustomer,
  changeNewCustomer,
  showPassword,
  showMyPassword,
  privacyPolicy,
  setPolicy,
  regLoading,
  regDisable,
  registrationHandler,
  isANewCustomer
}) => {
  return (
    <>
      <h4>Регистрация</h4>
      <label>
        Имя
        <input
          value={newCustomer.name}
          onChange={(e) => changeNewCustomer("name", e.target.value)}
          type="text"
          placeholder="Введите Ваше имя"
        />
      </label>
      <label>
        Логин
        <input
          value={newCustomer.email}
          onChange={(e) => changeNewCustomer("email", e.target.value)}
          type="text"
          placeholder="Введите логин"
        />
      </label>
      <label>
        Пароль
        <input
          value={newCustomer.password}
          onChange={(e) => changeNewCustomer("password", e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="Введите пароль"
        />
        <span
          className={styles.eyes}
          onClick={showMyPassword}
        >
          {
            showPassword
              ? <i className="far fa-eye-slash"></i>
              : <i className="far fa-eye"></i>
          }
        </span>
      </label>
      <label className={styles.checkbox}>
        Находясь в аккаунте или создавая новый, вы соглашаетесь на обработку персональных данных и получение
        рассылки.
        <input
          value={privacyPolicy}
          onChange={setPolicy}
          type="checkbox" />
      </label>
      {
        regLoading
          ? <button className={styles.disable}>
            <span className={styles.disableText}>Регистрируем Ваш Аккаунт</span>
          </button>
          : <button
            className={regDisable ? styles.dsbl : ""}
            disabled={regDisable}
            onClick={registrationHandler}>
            Зарегистрироваться
          </button>
      }
      <p>Если у Вас уже есть аккаунт,<span onClick={isANewCustomer}> перейдите по ссылке</span></p>
    </>
  );
};

export default Registration;
