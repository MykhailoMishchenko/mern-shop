import React, {useEffect, useState} from "react";
import styles from "./UserDetails.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetails} from "../../../redux/Users/Details/actions";
import {updateUserDetails} from "../../../redux/Users/UpdateDetails/actions";
import Form from "./Form/Form";
import Buttons from "./Buttons/Buttons";
import {logout} from "../../../redux/Users/Logout/actions";
import Alerts from "./Alerts/Alerts";

const UserDetails = () => {

  const
    [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }),
    {user, loading} = useSelector(state => state?.profile),
    {loading: updateProfileLoading, successAlert, errorAlert} = useSelector(state => state?.updateProfile);

  const dispatch = useDispatch();

  const changeForm = (id, e) => setForm({
    ...form,
    [id]: e
  });

  const updateProfileHandler = () => {
    dispatch(updateUserDetails({
        id: user._id, name: form.name,
        email: form.email, password: form.password
      })
    );
  };
  const logoutHandler = () => dispatch(logout());

  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, []);

  useEffect(() => {
    if (user) {
      setForm({...form, name: user.name, email: user.email});
    }
  }, [user]);

  const disabled = form.password !== form.confirmPassword;

  return (
    <div className={styles.container}>
      <Form
        loading={loading}
        name={form.name}
        email={form.email}
        password={form.password}
        confirmPassword={form.confirmPassword}
        setForm={changeForm}
      />
      <Buttons
        disabled={disabled}
        updateProfileLoading={updateProfileLoading}
        updateProfile={updateProfileHandler}
        logout={logoutHandler}
      />
      <Alerts success={successAlert} error={errorAlert}/>
    </div>
  );
};

export default UserDetails;
