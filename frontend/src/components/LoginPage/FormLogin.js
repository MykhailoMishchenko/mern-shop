import React, {useState} from "react";
import styles from "./FormLogin.module.scss";
import {ReactComponent as LoginImage} from "../../assets/image/storyset/login.svg";

const FormLogin = () => {

  const [isNewCustomer, setIsNewCustomer] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const isANewCustomer = () => setIsNewCustomer(!isNewCustomer);
  const showMyPassword = () => setShowPassword(!showPassword);

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {
          isNewCustomer
            ? <>
              <h4>Регистрация</h4>
              <label>
                Логин
                <input type="text" placeholder="Введите логин" />
              </label>
              <label>
                Пароль
                <input type={showPassword ? "text" : "password"} placeholder="Введите пароль" />
                <span className={styles.eyes} onClick={showMyPassword}>
                  {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                </span>
              </label>
              <label className={styles.checkbox}>
                Находясь в аккаунте или создавая новый, вы соглашаетесь на обработку персональных данных и получение рассылки.
                <input type="checkbox" />
              </label>
              <button>Зарегистрироваться</button>
              <p>Если у Вас уже есть аккаунт,<span onClick={isANewCustomer}> перейдите по ссылке</span></p>
              </>
            : <>
              <h4>Войдите в Аккаунт</h4>
              <label>
                Логин
                <input type="text" placeholder="Введите логин" />
              </label>
              <label>
                Пароль
                <input type={showPassword ? "text" : "password"} placeholder="Введите пароль" />
                <span className={styles.eyes} onClick={showMyPassword}>
                  {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                </span>
              </label>
              <button>Войти</button>
              <p>Если у Вас еще нет аккаунта,<span onClick={isANewCustomer}> пройдите регистрацию</span></p>
            </>
        }
      </div>
      <LoginImage className={styles.svg} />
    </div>
  );
};

export default FormLogin;
