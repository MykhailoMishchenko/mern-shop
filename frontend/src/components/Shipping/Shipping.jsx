import React, {useEffect, useState} from "react";
import styles from "./Shipping.module.scss";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as ShippingImage} from "../../assets/image/storyset/shipping.svg";
import Image from "./Image/Image";
import Form from "./Form/Form";
import {addShippingInformation} from "../../redux/Order/actions";

const Shipping = () => {

  const
    history = useHistory(),
    dispatch = useDispatch();

  const
    [shippingInformation, setShippingInformation] = useState({
      city: "",
      street: "",
      department: "",
      country: ""
    }),
    {
      shipping
    } = useSelector(state => state?.order);

  const
    changeForm = (id, e) => setShippingInformation({
      ...shippingInformation,
      [id]: e
    }),
    saveShippingInformation = () => {
      dispatch(addShippingInformation(shippingInformation));
      history.push("/payment");
    };


  useEffect(() => {
    if (shipping) {
      setShippingInformation({
        city: shipping.city,
        street: shipping.street,
        department: shipping.department,
        country: shipping.country
      });
    }
  }, []);

  const disabled = !shippingInformation.city || !shippingInformation.street || !shippingInformation.department || !shippingInformation.country;

  return (
    <>
      <h4 className={styles.title}>Укажите Адрес Доставки</h4>
      <div className={styles.container}>
        <Image Component={ShippingImage} />
        <Form
          saveShippingInformation={saveShippingInformation}
          setForm={changeForm}
          disabled={disabled}
          city={shippingInformation.city}
          street={shippingInformation.street}
          department={shippingInformation.department}
          country={shippingInformation.country}
        />
      </div>
    </>
  );
};

export default Shipping;
