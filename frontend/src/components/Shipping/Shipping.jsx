import React, {useEffect, useState} from "react";
import styles from "./Shipping.module.scss";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as ShippingImage} from "../../assets/image/storyset/shipping.svg";
import Image from "./Image/Image";
import Form from "./Form/Form";
import {addShippingInformation} from "../../redux/Order/CreateOrderLocal/actions";

const Shipping = () => {

  const
    history = useHistory(),
    dispatch = useDispatch();

  const
    [shippingInformation, setShippingInformation] = useState({
      city: "",
      address: "",
      postalOffice: "",
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
        address: shipping.address,
        postalOffice: shipping.postalOffice,
        country: shipping.country
      });
    }
  }, []);

  const disabled = !shippingInformation.city || !shippingInformation.address || !shippingInformation.postalOffice || !shippingInformation.country;

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
          address={shippingInformation.address}
          postalOffice={shippingInformation.postalOffice}
          country={shippingInformation.country}
        />
      </div>
    </>
  );
};

export default Shipping;
