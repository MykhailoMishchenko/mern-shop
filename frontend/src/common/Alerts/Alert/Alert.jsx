import React from "react";
import styles from "./Alert.module.scss";

const Alert = ({msg, color}) => {
  return (
    <div className={color === "red" ? styles.wrapperError : styles.wrapperSuccess}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
