import React from "react";
import styles from "../FormLogin.module.scss";

const Register = ({
  newCustomer, regNameInputHandler, regEmailInputHandler,
  regPasswordInputHandler, showMyPassword,
  showPassword, privacyPolicy, regLoading,
  regDisable, registrationHandler, isANewCustomer, setPrivacy}) => {
  return (
    <>
      <h4>Регистрация</h4>
      <label>
        Имя
        <input
          value={newCustomer.name}
          onChange={regNameInputHandler}
          type="text"
          placeholder="Введите Ваше имя" />
      </label>
      <label>
        Логин
        <input
          value={newCustomer.email}
          onChange={regEmailInputHandler}
          type="text"
          placeholder="Введите логин" />
      </label>
      <label>
        Пароль
        <input
          value={newCustomer.password}
          onChange={regPasswordInputHandler}
          type={showPassword ? "text" : "password"}
          placeholder="Введите пароль" />
        <span className={styles.eyes} onClick={showMyPassword}>
                  {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                </span>
      </label>
      <label className={styles.checkbox}>
        Находясь в аккаунте или создавая новый, вы соглашаетесь на обработку персональных данных и получение
        рассылки.
        <input
          value={privacyPolicy}
          onChange={setPrivacy}
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
            Зарегистрироваться</button>
      }
      <p>Если у Вас уже есть аккаунт,<span onClick={isANewCustomer}> перейдите по ссылке</span></p>
    </>
  );
};

export default Register;
