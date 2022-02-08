import React, {useState} from "react";
import styles from "./FormLogin.module.scss";
import {ReactComponent as LoginImage} from "../../assets/image/storyset/login.svg";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/Users/Login/actions";
import FixedBottomAlert from "../../common/Alert/FixedBottomAlert/FixedBottomAlert";
import {register} from "../../redux/Users/Register/actions";
import Login from "./Login/Login";
import Register from "./Register/Register";

const FormLogin = () => {

  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const isANewCustomer = () => setIsNewCustomer(!isNewCustomer);
  const showMyPassword = () => {
    setShowPassword(!showPassword);
    setTimeout(() => setShowPassword(false), 2000);
  };
  const emailInputHandler = (e) => setForm({
    ...form,
    email: e.target.value
  });
  const passwordInputHandler = (e) => setForm({
    ...form,
    password: e.target.value
  });
  const loginHandler = () => dispatch(login(form));
  const regNameInputHandler = (e) => setNewCustomer({
    ...newCustomer,
    name: e.target.value
  });
  const regEmailInputHandler = (e) => setNewCustomer({
    ...newCustomer,
    email: e.target.value
  });
  const regPasswordInputHandler = (e) => setNewCustomer({
    ...newCustomer,
    password: e.target.value
  })
  const registrationHandler = () => dispatch(register(newCustomer));
  const setPrivacy = () => setPrivacyPolicy(!privacyPolicy);

  const dispatch = useDispatch();
  const {loading, error, errorAlert} = useSelector(state => state?.login);
  const {loading: regLoading} = useSelector(state => state?.registration);

  const isDisable = form.email.length <= 4 || form.password.length <= 4;
  const regDisable = newCustomer.name <= 2 || newCustomer.email.length <= 4 || newCustomer.password.length <= 4 || privacyPolicy === false;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          {
            isNewCustomer
              ? <Register
                regNameInputHandler={regNameInputHandler}
                regEmailInputHandler={regEmailInputHandler}
                regPasswordInputHandler={regPasswordInputHandler}
                registrationHandler={registrationHandler}
                showMyPassword={showMyPassword}
                privacyPolicy={privacyPolicy}
                newCustomer={newCustomer}
                isANewCustomer={isANewCustomer}
                showPassword={showPassword}
                regDisable={regDisable}
                regLoading={regLoading}
                setPrivacy={setPrivacy}
              />
              : <Login
                emailInputHandler={emailInputHandler}
                passwordInputHandler={passwordInputHandler}
                loginHandler={loginHandler}
                showMyPassword={showMyPassword}
                showPassword={showPassword}
                isANewCustomer={isANewCustomer}
                form={form}
                isDisable={isDisable}
                loading={loading}
              />
          }
        </div>
        <LoginImage className={styles.svg} />
      </div>
      {errorAlert &&  <FixedBottomAlert color="red" msg={error}/>}
    </>
  );
};

export default FormLogin;
