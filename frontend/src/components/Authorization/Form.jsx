import React, {useEffect, useState} from "react";
import styles from "./Form.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/Users/Login/actions";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import {ReactComponent as LoginImage} from "../../assets/image/storyset/login.svg";
import Alert from "../../common/Alerts/Alert/Alert";
import {register} from "../../redux/Users/Register/actions";

const Form = () => {

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


  const
    changeForm = (id, e) => setForm({
        ...form,
        [id]: e
      }),
    changeNewCustomer = (id, e) => setNewCustomer({
        ...newCustomer,
        [id]: e
      }),
    isANewCustomer = () => setIsNewCustomer(!isNewCustomer),
    showMyPassword = () => {
      setShowPassword(!showPassword);
      setTimeout(() => setShowPassword(false), 2000);
    },
    setPolicy = () => setPrivacyPolicy(!privacyPolicy);

  const
    loginHandler = () => dispatch(login(form)),
    registrationHandler = () => dispatch(register(newCustomer));

  const
    dispatch = useDispatch(),
    {loading, error, errorAlert} = useSelector(state => state?.login),
    {loading: regLoading, error: regError} = useSelector(state => state?.registration);

  const
    isDisable = form.email.length <= 4 || form.password.length <= 4,
    regDisable = newCustomer.name <= 2 || newCustomer.email.length <= 4 || newCustomer.password.length <= 4 || privacyPolicy === false;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          {
            isNewCustomer
              ? <Registration
                newCustomer={newCustomer}
                isANewCustomer={isANewCustomer}
                changeNewCustomer={changeNewCustomer}
                showPassword={showPassword}
                showMyPassword={showMyPassword}
                privacyPolicy={privacyPolicy}
                setPolicy={setPolicy}
                regLoading={regLoading}
                regDisable={regDisable}
                registrationHandler={registrationHandler}
              />
              : <Login
                form={form}
                setForm={changeForm}
                showPassword={showPassword}
                showMyPassword={showMyPassword}
                isANewCustomer={isANewCustomer}
                loading={loading}
                isDisable={isDisable}
                loginHandler={loginHandler}
              />
          }
        </div>
        <LoginImage className={styles.svg} />
      </div>
      {errorAlert && <Alert color="red" msg={error} />}
    </>
  );
};

export default Form;
