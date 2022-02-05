import React, {useEffect, useState} from "react";
import styles from "./userDetails.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../redux/Users/Logout/actions";
import {getUserDetails} from "../../../redux/Users/Details/actions";
import {updateUserDetails} from "../../../redux/Users/UpdateDetails/actions";
import FixedBottomAlert from "../../../common/Alert/FixedBottomAlert/FixedBottomAlert";

const UserDetails = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const {user, loading} = useSelector(state => state?.profile);
  const {
    loading: updateProfileLoading, successAlert,
    errorAlert
  } = useSelector(state => state?.updateProfile);

  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const logoutHandler = () => dispatch(logout());
  const nameInputHandler = (e) => setName(e.target.value);
  const emailInputHandler = (e) => setEmail(e.target.value);
  const passwordInputHandler = (e) => setPassword(e.target.value);
  const confirmPasswordInputHandler = (e) => setConfirmPassword(e.target.value);

  const disabled = password !== confirmPassword;

  const updateProfileHandler = () => {
    dispatch(updateUserDetails({
      id: user._id, name, email, password
    }));
  };

  return (
    <div className={styles.container}>
      <h4>Профиль Пользователя</h4>
      <label>
        Имя
        <input
          value={loading ? "Загрузка" : name}
          onChange={nameInputHandler}
          type="text"
          placeholder="Введите имя" />
      </label>
      <label>
        Логин
        <input
          value={loading ? "Загрузка" : email}
          onChange={emailInputHandler}
          type="text"
          placeholder="Введите логин" />
      </label>
      <label>
        Пароль
        <input
          value={password}
          onChange={passwordInputHandler}
          type="password"
          placeholder="Введите пароль" />
      </label>
      <label>
        Подтвердите пароль
        <input
          value={confirmPassword}
          onChange={confirmPasswordInputHandler}
          type="password"
          placeholder="Введите пароль" />
      </label>
      <div className={styles.groupBtn}>
        {
          updateProfileLoading
          ? <button className={styles.disable}>
              <span className={styles.disableText}>Обновляем Ваши данные</span>
            </button>
          : <button
              disabled={disabled}
              className={disabled ? styles.dsbl : ""}
              onClick={updateProfileHandler}>
              Обновить мои данные
            </button>
        }
        <button
          className={styles.logout}
          onClick={logoutHandler}>
          Выйти
        </button>
      </div>
      {successAlert && <FixedBottomAlert color="green" msg="Ваши данные успешно обновлены!" />}
      {errorAlert && <FixedBottomAlert color="red" msg="Что-то пошло не так! Попробуйте позже" />}
    </div>
  );
};

export default UserDetails;
