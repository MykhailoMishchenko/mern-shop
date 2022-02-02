import React, {useState} from "react";
import styles from "./FormLogin.module.scss";
import {ReactComponent as LoginImage} from "../../assets/image/storyset/login.svg";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/Users/Login/actions";
import _ from "lodash"
import FixedBottomAlert from "../../common/Alert/FixedBottomAlert/FixedBottomAlert";

const FormLogin = () => {

  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const isANewCustomer = () => setIsNewCustomer(!isNewCustomer);
  const showMyPassword = () => {
    setShowPassword(!showPassword)
    setTimeout(() => setShowPassword(false), 2000);
  }
  const emailInputHandler = (e) => setForm({
    ...form,
    email: e.target.value
  });
  const passwordInputHandler = (e) => setForm({
    ...form,
    password: e.target.value
  });
  const loginHandler = () => dispatch(login(form));

  const dispatch = useDispatch();
  const {
    loading, credentials, error, errorAlert
  } = useSelector(state => state.login);

  return (
    <>
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
                    : <button onClick={loginHandler}>Войти</button>
                }
                <p>Если у Вас еще нет аккаунта,<span onClick={isANewCustomer}> пройдите регистрацию</span></p>
              </>
          }
        </div>
        <LoginImage className={styles.svg} />
      </div>
      {errorAlert &&  <FixedBottomAlert color="red" msg={error}/>}
    </>
  );
};

export default FormLogin;
