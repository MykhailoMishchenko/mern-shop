import React from "react";
import styles from "../FormLogin.module.scss";

const Login = ({form, showPassword, passwordInputHandler, showMyPassword, loginHandler, isDisable, isANewCustomer, emailInputHandler, loading}) => {
  return (
    <>
      <h4>Войдите в Аккаунт</h4>
      <label>
        Логин
        <input
          value={form.email}
          type="text"
          placeholder="Введите логин"
          onChange={emailInputHandler}
        />
      </label>
      <label>
        Пароль
        <input
          value={form.password}
          type={showPassword ? "text" : "password"}
          placeholder="Введите пароль"
          onChange={passwordInputHandler}
        />
        <span className={styles.eyes} onClick={showMyPassword}>
                  {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                </span>
      </label>
      {
        loading
          ? <button className={styles.disable}>
            <span className={styles.disableText}>Входим в Ваш Аккаунт</span>
          </button>
          : <button onClick={loginHandler} disabled={isDisable}
                    className={isDisable ? styles.dsbl : ""}>Войти</button>
      }
      <p>Если у Вас еще нет аккаунта,<span onClick={isANewCustomer}> пройдите регистрацию</span></p>
    </>
  );
};

export default Login;
