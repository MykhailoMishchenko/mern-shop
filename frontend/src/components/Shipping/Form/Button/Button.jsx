import React from "react";
import styles from "../Form.module.scss";

const Button = ({disabled, saveShippingInformation}) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? styles.dsbl : ""}
      onClick={saveShippingInformation}
    >Дальше
    </button>
  );
};

export default Button;
