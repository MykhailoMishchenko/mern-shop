import React, {useEffect, useState} from "react";
import styles from "./shippingForm.module.scss";
import {ReactComponent as Shipping} from "../../../assets/image/storyset/shipping.svg";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addShippingInformation} from "../../../redux/Order/actions";

const ShippingForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [shippingInformation, setShippingInformation] = useState({
    city: "",
    street: "",
    department: "",
    country: ""
  });
  const {
    shipping
  } = useSelector(state => state?.order)

  const
    setCity = (e) => setShippingInformation({...shippingInformation, city: e.target.value}),
    setStreet = (e) => setShippingInformation({...shippingInformation, street: e.target.value}),
    setDepartment = (e) => setShippingInformation({...shippingInformation, department: e.target.value}),
    setCountry = (e) => setShippingInformation({...shippingInformation, country: e.target.value}),
    saveShippingInformation = () => {
      dispatch(addShippingInformation(shippingInformation));
      history.push("/payment");
    };

  useEffect(() => {
    if(shipping){
      setShippingInformation({
        city: shipping.city,
        street: shipping.street,
        department: shipping.department,
        country: shipping.country
      })
    }
  }, [])

  const disabled = !shippingInformation.city || !shippingInformation.street || !shippingInformation.department || !shippingInformation.country;

  return (
    <>
      <h4>Укажите Адрес Доставки</h4>
      <div className={styles.container}>
        <div className={styles.img}>
          <Shipping />
        </div>
        <div className={styles.form}>
          <label>
            Город
            <input
              value={shippingInformation.city}
              onChange={setCity}
              type="text"
              placeholder="Введите город доставки"
            />
          </label>
          <label>
            Улица
            <input
              value={shippingInformation.street}
              onChange={setStreet}
              type="text"
              placeholder="Введите улицу доставки"
            />
          </label>
          <label>
            Отделение Новой Почты
            <input
              value={shippingInformation.department}
              onChange={setDepartment}
              type="text"
              placeholder="Введите отделение Новой Почты"
            />
          </label>
          <label>
            Страна
            <input
              value={shippingInformation.country}
              onChange={setCountry}
              type="text"
              placeholder="Введите страну доставки"
            />
          </label>
          <button
            disabled={disabled}
            className={disabled ? styles.dsbl : ""}
            onClick={saveShippingInformation}
          >Дальше
          </button>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;
